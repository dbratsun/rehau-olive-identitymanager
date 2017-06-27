import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-role-edit',
    template: '<app-role-edit-container [id]="id" [editing]="editing"></app-role-edit-container>'
})
export class RoleEditComponent implements OnInit {
    editing: boolean = false;
    id: number;
    constructor(activatedRoute: ActivatedRoute) {
        this.editing = activatedRoute.snapshot.params["mode"] == "edit";
        this.id = activatedRoute.snapshot.params["id"];
    }
    ngOnInit() {
        
    }
}
