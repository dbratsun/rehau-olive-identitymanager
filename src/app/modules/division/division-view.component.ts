import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-division-view',
    template: '<app-division-view-container></app-division-view-container>'
})
export class DivisionViewComponent implements OnInit {
    constructor(activatedRoute: ActivatedRoute) {}
    ngOnInit() {
        
    }
}