import { Component, OnInit, Input, Output, OnChanges, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Repository } from '../../shared/models/repository.model';
import { Division } from '../../shared/models/division';

@Component({
    selector: 'app-division-edit-container',
    template: `
        <app-division-edit-dumb [editing]="editing" [division]="division" (onSave)="save($event)" (onCancel)="cancel()"></app-division-edit-dumb>
    `
})
export class DivisionEditContainerComponent implements OnInit, OnChanges, OnDestroy {
    @Input() id: number;
    @Input() editing: boolean = false;

    division: Division = new Division();

    constructor(private repo: Repository, private router: Router) {
    }

    ngOnInit() {
        Object.assign(this.division, this.repo.getDivision(this.id))
    }

    ngOnChanges() {
    }

    ngOnDestroy() {
    }

    save(division: Division) {
        this.repo.saveDivision(division);
        this.router.navigateByUrl("/organization/division");
    }

    cancel() {
        this.router.navigateByUrl("/organization/division");
    }

}