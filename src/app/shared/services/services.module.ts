import { NgModule } from '@angular/core';
import { SettingsService } from './settings.service';
import { RegionService } from './region.service';

@NgModule({
  imports: [],
  exports : [],
  declarations: [],
  providers: []
})
export class ServicesModule{
  static forRoot() {
    return {
      ngModule: ServicesModule,
      providers: [
        SettingsService,
        RegionService
      ]
    }
  }
}

export {
  SettingsService,
  RegionService
}
