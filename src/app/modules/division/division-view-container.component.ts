import { Component, OnInit, OnChanges, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Repository } from '../../shared/models/repository.model';
import { Division } from '../../shared/models/division';

@Component({
    selector: 'app-division-view-container',
    template: `
        <app-division-view-dumb 
            [items]="division" 
            [settingsCollapsed]="settingsCollapsed" 
            (onNewDivision)="newDivision()"
            (onEditDivision)="editDivision($event)"
            (onDeleteDivision)="deleteDivision($event)">
        </app-division-view-dumb>
    `
})
export class DivisionViewContainerComponent implements OnInit, OnChanges, OnDestroy {
    
    division: Division[];
    settingsCollapsed: boolean = true;

    constructor(private repo: Repository, private router: Router) {
    }

    ngOnInit() {
        this.retrieveDivisionList();
    }

    ngOnChanges() {
        this.retrieveDivisionList();
    }

    ngOnDestroy() {

    }

    newDivision() {
        this.router.navigateByUrl("/organization/division/new");
    }

    editDivision(division: Division) {
        this.router.navigateByUrl("/organization/division/edit/" + division.id);
    }

    retrieveDivisionList() {
        this.division = this.repo.getDivisions()
    }

}