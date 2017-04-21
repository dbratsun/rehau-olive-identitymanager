import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GtConfig } from '@angular-generic-table/core';
import { GenericListComponent } from "../../shared/components/list/generic/generic-list.component";
import { Repository } from '../../shared/models/repository.model';

@Component({
  selector: 'app-user',
  templateUrl: "user-list.component.html"
})
export class UserListComponent {
    public configObject: GtConfig<any>;
    constructor(
        repo: Repository
    ) {
        this.configObject = {
            settings: [
                {
                    objectKey: 'id',
                    sort: 'desc',
                    columnOrder: 0
                },
                {
                    objectKey: 'username',
                    sort: 'desc',
                    columnOrder: 1
                },
                {
                    objectKey: 'fullname',
                    sort: 'desc',
                    columnOrder: 2
                },
                {
                    objectKey: 'birthdate',
                    sort: 'desc',
                    columnOrder: 3
                },
                {
                    objectKey: 'email',
                    sort: 'desc',
                    columnOrder: 4
                },
                {
                    objectKey: 'phonenumber',
                    sort: 'desc',
                    columnOrder: 5
                }
            ],
            fields: [
                {
                    name: 'Id',
                    objectKey: 'id'
                },
                {
                    name: 'User Name',
                    objectKey: 'username'
                },
                {
                    name: 'Full Name',
                    objectKey: 'fullname'
                },
                {
                    name: 'Date of Birth',
                    objectKey: 'birthdate'
                },
                {
                    name: 'EMail',
                    objectKey: 'email'
                },
                {
                    name: 'Phone',
                    objectKey: 'phonenumber'
                }
            ]    
        }
    }
}
