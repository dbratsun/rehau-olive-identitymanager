import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ClarityModule } from 'clarity-angular';

import { UnderConstructionComponent } from './underconstruction/underconstruction.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { DivisionComponent } from './division/division.component';
import { RegionComponent } from './region/components/region/region.component';
import { RegionEditComponent } from './region/components/region/region-edit.component';

import { SharedComponentsModule } from '../shared/components/sharedcomponents.module';
import { ModelsModule } from '../shared/models/models.module';

const COMPONENTS = [
    UnderConstructionComponent,
    DashboardComponent,
    UserComponent,
    DivisionComponent,
    RegionComponent,
    RegionEditComponent,
    ConfigurationComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ClarityModule,
    SharedComponentsModule,
    ModelsModule
  ],
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class ModulesModule { }

