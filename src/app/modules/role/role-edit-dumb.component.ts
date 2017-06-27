import { Component, Inject, Input, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from '../../core/models/role';

@Component({
    selector: 'app-role-edit-dumb',
    templateUrl: 'role-edit-dumb.component.html'
})
export class RoleEditDumbComponent {
    _role: Role;
    @Input() set role(value) {
        this._role = Object.assign({}, value);
    }         
    get role() {
        return this._role;
    }
    @Input() editing: Boolean = false;
    @Output() onSave = new EventEmitter();
    @Output() onCancel = new EventEmitter();
    @Output() onReset = new EventEmitter();
    openedUserModal: boolean = false;
    constructor(
    ) { }

    save(role) {
        this.onSave.emit(role);
    }

    cancel() {
        this.onCancel.emit();
    }

    reset() {
        this.onReset.emit();
    }

}