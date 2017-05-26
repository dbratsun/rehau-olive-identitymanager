import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListSettings } from "../../../models/list-settings";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: "generic-list",
    templateUrl: "generic-list.component.html"
})
export class GenericListComponent {
    @Input() settingsCollapsed: boolean = true
    @Output() onAdd = new EventEmitter();

    addRouterLink: string = "";
    settings: ListSettings = new ListSettings(10, 0);

    constructor(
        private route: ActivatedRoute
    ) {}

    toggleSettings() {
        this.settingsCollapsed = !this.settingsCollapsed;
    }

    settingsChanged(value) {
        let v = value;
        this.settings.rowsPerPage = value.rowsPerPage;
        this.settings.countToShow = value.countToShow;
    }

    addClick() {
        this.onAdd.emit();    
    }

}