import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'}
];

// - Updated Export
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
