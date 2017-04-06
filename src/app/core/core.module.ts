import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClarityModule } from 'clarity-angular';

import { SettingsComponent } from './settings/settings.component';
import { FooterComponent } from './footer/footer.component';
import { SharedComponentsModule } from '../shared/components/sharedcomponents.module';
import { NavComponent } from './nav/nav.component';
import { SubNavComponent } from './sub-nav/sub-nav.component';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule,
    SharedComponentsModule,
    ClarityModule
  ],
  declarations: [
    NavComponent,
    SubNavComponent,
    FooterComponent, 
    SettingsComponent
  ],
  exports: [
    NavComponent,
    SubNavComponent,
    FooterComponent
  ]
})
export class CoreModule { }
