import { Injectable } from '@angular/core';
import { Request, Response, ResponseOptions, RequestMethod} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import { Observer} from 'rxjs/Observer';
import { Repository } from '../models/repository.model';
import { Role } from '../models/role';

@Injectable()
export class MockXHRBackend {
    constructor(private repo: Repository) { }

    createConnection(request: Request) {
        var response = new Observable((responseObserver: Observer<Response>) => {
            var responseData;
            var responseOptions;
            switch (request.method) {
                case RequestMethod.Get: 
                    if (request.url === 'regions') {
                        responseOptions = new ResponseOptions({
                            body: { regions: JSON.parse(JSON.stringify(this.repo.getRegions()))},
                            status: 200
                        })
                    }
                    if (request.url === 'roles') {
                        responseOptions = new ResponseOptions({
                            body: { roles: JSON.parse(JSON.stringify(this.repo.getRoles()))},
                            status: 200
                        })
                    }
                    else {
                        if (request.url.split('/')[0] == 'roles') {
                            var id = parseInt(request.url.split('/')[1]);
                            let role = this.repo.getRole(id);
                            responseOptions = new ResponseOptions({
                                body: { role: JSON.parse(JSON.stringify(this.repo.getRole(id)))},
                                status: 200
                            })
                        }
                    }
                    break;
                case RequestMethod.Post:
                    let classType = request.url.split('/')[0];
                    switch (classType) {
                        case 'roles':
                            let role : Role = JSON.parse(request.getBody());
                            this.repo.saveRole(role);
                            responseOptions = new ResponseOptions({ status: 201 })
                    }
                    break;
                case RequestMethod.Delete:
            }
            var responseObject = new Response(responseOptions);
            responseObserver.next(responseObject);
            responseObserver.complete();
            return () => {};
        })
        return { response };
    }

    _regionItems = [
        {
            id: "1", 
            name: "Moscow", 
            number: 3251, 
            description: "The biggest region in Russia"
        },
        {
            id: "2", 
            name: "Sankt-Petersburg", 
            number: 3253, 
            description: "The most beatiful region in Russia"
        },
        {
            id: "3", 
            name: "Rostov on Don", 
            number: 3252, 
            description: "The hottest region in Russia"
        },
        {
            id: "4", 
            name: "Novosibirsk", 
            number: 3254, 
            description: "The coldest region in Russia"
        }
    ]


}   