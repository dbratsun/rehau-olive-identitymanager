import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../../shared/services/services.module';
import { ConfirmComponent } from '../testdialog/testdialog.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { Settings } from '../../shared/models/settings';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  settings: Settings;

  constructor(
    private _settingsService: SettingsService,
    private dialogService: DialogService
  ) {
    this.settings = this._settingsService.settings;
  }

  ngOnInit() {
  }

  toggleSettings() {  
    // this._settingsService.toggleSettings();
    let disposable = this.dialogService.addDialog(ConfirmComponent, {
                title:'Confirm title', 
                message:'Confirm message'})
                .subscribe((isConfirmed)=>{
                    //We get dialog result
                    if(isConfirmed) {
                        alert('accepted');
                    }
                    else {
                        alert('declined');
                    }
                });
            //We can close dialog calling disposable.unsubscribe();
            //If dialog was not closed manually close it by timeout
            setTimeout(()=>{
                disposable.unsubscribe();
            },10000);
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }
}
