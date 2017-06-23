import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ClarityModule } from 'clarity-angular';

import { UnderConstructionComponent } from './underconstruction/underconstruction.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user/user-list.component';
import { UserSelectComponent } from './user/user-select.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { DivisionViewComponent } from './division/division-view.component';
import { DivisionViewContainerComponent } from './division/division-view-container.component';
import { DivisionViewDumbComponent } from './division/division-view-dumb.component';
import { DivisionEditComponent } from './division/division-edit.component';
import { DivisionEditContainerComponent } from './division/division-edit-container.component';
import { DivisionEditDumbComponent } from './division/division-edit-dumb.component';
import { RegionComponent } from './region/components/region/region.component';
import { RegionEditComponent } from './region/components/region/region-edit.component';
import { RoleViewComponent } from './role/role-view.component';
import { RoleViewContainerComponent } from './role/role-view-container.component';
import { RoleViewDumbComponent } from './role/role-view-dumb.component';

import { SharedComponentsModule } from '../shared/components/sharedcomponents.module';
import { ModelsModule } from '../shared/models/models.module';

const COMPONENTS = [
    UnderConstructionComponent,
    DashboardComponent,
    UserListComponent,
    UserSelectComponent,
    DivisionViewComponent,
    DivisionViewContainerComponent,
    DivisionViewDumbComponent,
    DivisionEditComponent,
    DivisionEditContainerComponent,
    DivisionEditDumbComponent,
    RegionComponent,
    RegionEditComponent,
    RoleViewComponent,
    RoleViewContainerComponent,
    RoleViewDumbComponent,
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

