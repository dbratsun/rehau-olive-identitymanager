import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-datagrid-settings',
  templateUrl: './datagrid-settings.component.html'
})
export class DatagridSettingsComponent implements OnInit {

    @Input() numberFieldName: string = '';
    @Input() totalCount: number = 0;
    @Input() countToShow: number = 0;
    @Input() rowsPerPage: number = 0;
    @Output() values = new EventEmitter();

    private countToShowCtrl: FormControl;
    private rowsPerPageCtrl: FormControl;
    private form: FormGroup;

    constructor(private formBuilder: FormBuilder) { 
      this.countToShowCtrl = formBuilder.control(0);
      this.rowsPerPageCtrl = formBuilder.control(0);
      this.form = formBuilder.group({
          countToShow: this.countToShowCtrl,
          rowsPerPage: this.rowsPerPageCtrl
      });
    }

    ngOnInit() {
      this.countToShowCtrl.setValue(+this.countToShow);
      this.rowsPerPageCtrl.setValue(+this.rowsPerPage);
    }

    onSubmit() {
      let v = {
        countToShow: +this.countToShowCtrl.value,
        rowsPerPage: +this.rowsPerPageCtrl.value
      }
      this.values.emit(v);
    }
}

