import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedComponentsModule } from '../shared/components/sharedcomponents.module';
import { NavComponent } from './nav/nav.component';
import { ConfirmComponent } from './testdialog/testdialog.component';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule,
    SharedComponentsModule
  ],
  declarations: [
    HeaderComponent, 
    NavComponent,
    FooterComponent, 
    SettingsComponent,
    ConfirmComponent
  ],
  exports: [
    HeaderComponent, 
    NavComponent,
    FooterComponent
  ],
  entryComponents: [
    ConfirmComponent
  ]
})
export class CoreModule { }
