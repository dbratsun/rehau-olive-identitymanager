import { Component, OnInit, Input, Output, EventEmitter, IterableDiffers } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../shared/models/user';
import { Repository } from '../../shared/models/repository.model';
import 'rxjs/Rx';

@Component({
  selector: 'app-user-select',
  templateUrl: 'user-select.component.html'
})
export class UserSelectComponent {
    @Input() text: string;
    @Input('users') selectedUsers: User[];
    @Output() action = new EventEmitter();
    opened: boolean = true;
    users: User[] = new Array<User>();
    changed: boolean = false;
    first: boolean = true;
    data: Observable<Array<User>>;

    constructor(
        private repo: Repository,
        private _differs: IterableDiffers
        ) {
        this.users = this.repo.getUsers();
        this.data = Observable.of(this.selectedUsers);
        this.data.subscribe(
            value => this.changed = false
        );
        // this.users.forEach(r => this.selectedUsers.push(r));
    }

    onCancel() {
        let output = {
            mode: "cancel"
        };
        this.action.emit(output);
    }

    onSave() {
        let output = {
            mode: "save"
        };
        this.action.emit(output);
    }

    userIsSelected(user: User) : boolean {
        return this.selectedUsers.indexOf(user) >= 0;
        // return this.users.some(u => this.selectedUsers.includes(u));
    }

    ngDoCheck(): void {

    }

}
