import { NgModule } from '@angular/core';
import { SettingsService } from './settings.service';
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
        SettingsService
      ]
    }
  }
}


export {
  SettingsService
}
