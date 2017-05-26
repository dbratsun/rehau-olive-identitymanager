import { Component, Inject, Input, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Division } from '../../shared/models/division';

@Component({
    selector: 'app-division-edit-dumb',
    templateUrl: 'division-edit-dumb.component.html'
})
export class DivisionEditDumbComponent {
    @Input() division: Division;    
    @Input() editing: Boolean = false;
    @Output() onSave = new EventEmitter();
    @Output() onCancel = new EventEmitter();
    openedUserModal: boolean = false;
    constructor(
        private activeRoute: ActivatedRoute,
        private router: Router
    ) { }

    save(division) {
        this.onSave.emit(division);
    }

    cancel() {
        this.onCancel.emit();
    }

    reset() {
        this.division = new Division();
    }

}