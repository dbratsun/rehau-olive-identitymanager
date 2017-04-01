import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'region', loadChildren: 'app/modules/region/region.module#RegionModule', data: {regionType: 'regular'}}
];

// - Updated Export
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
