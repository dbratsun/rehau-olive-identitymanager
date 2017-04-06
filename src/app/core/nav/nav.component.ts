import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../shared/services/services.module';
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
  ) {
    this.settings = this._settingsService.settings;
  }

  ngOnInit() {
  }

  toggleSettings() {  
    // this._settingsService.toggleSettings();
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }
}
