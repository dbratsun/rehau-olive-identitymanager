import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedComponentsModule } from '../shared/components/sharedcomponents.module';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule,
    SharedComponentsModule
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    SettingsComponent
  ],
  exports: [
    HeaderComponent, 
    FooterComponent
  ]
})
export class CoreModule { }
