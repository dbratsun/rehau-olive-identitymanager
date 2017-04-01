import {Request, Response, ResponseOptions, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

export class MockXHRBackend {
    constructor() {

    }

    createConnection(request: Request) {
        var response = new Observable((responseObserver: Observer<Response>) => {
            var responseData;
            var responseOptions;
            switch (request.method) {
                case RequestMethod.Get: 
                    if (request.url === 'regions') {
                        responseOptions = new ResponseOptions({
                            body: { regions: JSON.parse(JSON.stringify(this._regionItems))},
                            status: 200
                        })
                    }
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
            name: "Region 1", 
            number: 1, 
            description: "Region 1 description"
        },
        {
            id: "2", 
            name: "Region 2", 
            number: 2, 
            description: "Region 2 description"
        },
        {
            id: "3", 
            name: "Region 3", 
            number: 3, 
            description: "Region 3 description"
        },
        {
            id: "4", 
            name: "Region 4", 
            number: 4, 
            description: "Region 4 description"
        }
    ]


}   