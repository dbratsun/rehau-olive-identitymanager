import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-division-edit',
    template: '<app-division-edit-container [id]="id" [editing]="editing"></app-division-edit-container>'
})
export class DivisionEditComponent implements OnInit {
    editing: boolean = false;
    id: number;
    constructor(activatedRoute: ActivatedRoute) {
        this.editing = activatedRoute.snapshot.params["mode"] == "edit";
        this.id = activatedRoute.snapshot.params["id"];
    }
    ngOnInit() {
        
    }
}
