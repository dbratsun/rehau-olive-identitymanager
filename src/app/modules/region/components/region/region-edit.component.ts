import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Region } from '../../../../shared/models/region';
import { Repository } from '../../../../shared/models/repository.model';

@Component({
    selector: 'app-region-edit',
    templateUrl: 'region-edit.component.html',
    styleUrls: ['region-edit.component.scss']
})
export class RegionEditComponent {
    region: Region = new Region();    
    editing: boolean = false;
    constructor(
        private repo: Repository,
        private activeRoute: ActivatedRoute,
        private router: Router
    ) {
        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        let id = activeRoute.snapshot.params["id"];
        if (id != null) {
            let name = activeRoute.snapshot.params["name"];
            let number = activeRoute.snapshot.params["number"];
            let description = activeRoute.snapshot.params["description"];

            if (name != null && number != null && description != null) {
                this.region.id = id;
                this.region.name = name;
                this.region.number = Number.parseInt(number);
                this.region.description = description;
            } else {
                Object.assign(this.region, repo.getRegion(id) || new Region());
            }
        }
    }
    submitForm(form: NgForm) {
        if (form.valid) {
            this.repo.saveRegion(this.region);
            this.router.navigateByUrl("organization/region");
        }
    }

    resetForm() {
        this.region = new Region();
    }

}