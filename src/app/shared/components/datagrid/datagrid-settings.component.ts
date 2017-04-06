import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-datagrid-settings',
  templateUrl: './datagrid-settings.component.html'
})
export class DatagridSettingsComponent implements OnInit {
    @Input() numberField: string = '';
    constructor() { }
    ngOnInit() {
    }
}

