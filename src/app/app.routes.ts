import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { UserListComponent } from './modules/user/user-list.component';
import { ConfigurationComponent } from './modules/configuration/configuration.component';
import { UnderConstructionComponent } from './modules/underconstruction/underconstruction.component';
import { DivisionViewComponent } from './modules/division/division-view.component';
import { DivisionEditComponent } from './modules/division/division-edit.component';
import { RegionComponent } from './modules/region/components/region/region.component';
import { RegionEditComponent } from './modules/region/components/region/region-edit.component';
import { RoleViewComponent } from './modules/role/role-view.component';
import { RoleEditComponent } from './modules/role/role-edit.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: '/dashboard/main', pathMatch: 'full' },
      { path: 'underconstruction', component: UnderConstructionComponent },
      { path: 'dashboard/main', component: DashboardComponent },
      { path: 'dashboard', redirectTo: '/dashboard/main', pathMatch: 'full' },
      { path: 'users/roles', component: RoleViewComponent },
      { path: 'users', redirectTo: '/users/users', pathMatch: 'full' },
      { path: 'users/users', component: UserListComponent },
      { path: 'users/role/:mode', component: RoleEditComponent },
      { path: 'users/role/:mode/:id', component: RoleEditComponent },
      { path: 'configuration', redirectTo: '/configuration/settings', pathMatch: 'full' },
      { path: 'configuration/settings', component: ConfigurationComponent },
      { path: 'organization', redirectTo: '/organization/division', pathMatch: 'full' },
      { path: 'organization/division', component: DivisionViewComponent },
      { path: 'organization/division/:mode', component: DivisionEditComponent },
      { path: 'organization/division/:mode/:id', component: DivisionEditComponent },
      { path: 'organization/region', component: RegionComponent },
      { path: 'organization/region/:mode', component: RegionEditComponent },
      { path: 'organization/region/:mode/:id', component: RegionEditComponent }
    ]
  }
]

/*
const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'region', loadChildren: 'app/modules/region/region.module#RegionModule', data: {regionType: 'regular'}}
];
*/

// - Updated Export
// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }

