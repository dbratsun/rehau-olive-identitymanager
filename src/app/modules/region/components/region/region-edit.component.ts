import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Region } from '../../../../shared/models/region';

@Component({
    selector: 'app-region-edit',
    templateUrl: 'region-edit.component.html',
    styleUrls: ['region-edit.component.scss']
})
export class RegionEditComponent {
    
    editing: boolean = false;
    constructor(
        private region: Region,
        private activatedRoute: ActivatedRoute
    ) {
        this.editing = activatedRoute.snapshot.url[1].path == 'edit';
    }
}