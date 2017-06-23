import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
    selector: 'app-role-view',
    template: '<app-role-view-container></app-role-view-container>'
})
export class RoleViewComponent implements OnInit{
   constructor(activatedRoute: ActivatedRoute) {}
    ngOnInit() {
        
    }
}    
