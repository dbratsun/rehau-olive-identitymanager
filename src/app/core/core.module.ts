import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedComponentsModule } from '../shared/components/sharedcomponents.module';
import { NavComponent } from './nav/nav.component';
import { SubNavComponent } from './sub-nav/sub-nav.component';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule,
    SharedComponentsModule
  ],
  declarations: [
    HeaderComponent, 
    NavComponent,
    SubNavComponent,
    FooterComponent, 
    SettingsComponent
  ],
  exports: [
    HeaderComponent, 
    NavComponent,
    SubNavComponent,
    FooterComponent
  ]
})
export class CoreModule { }
