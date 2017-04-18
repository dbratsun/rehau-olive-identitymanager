import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../shared/models/user';
import { Repository } from '../../shared/models/repository.model';

// minimize the output bundle
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-user-select',
  templateUrl: 'user-select.component.html'
})
export class UserSelectComponent implements OnInit {
    @Input() text: string;
    @Input('users') selectedUsers: User[];
    @Output() action = new EventEmitter();
    opened: boolean = true;
    users: User[] = new Array<User>();
    changed: boolean = false;
    first: boolean = true;
    data: Observable<Array<User>>;
    selected: User[] = new Array<User>();

    constructor(private repo: Repository) {
    }

    ngOnInit() {
        this.users = this.repo.getUsers();
        this.selectedUsers.forEach(user => this.selected.push(user)); 
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

    onSelectedChanged(event) {
        let su = Observable.from(this.selectedUsers);
        let s = Observable.from(this.selected);

        var source = su.sequenceEqual(s);
        source.subscribe(x => this.changed = !x);    
    }

}
