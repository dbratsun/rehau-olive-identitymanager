import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegionComponent } from './components/region/region.component';
import { RegionEditComponent } from './components/region/region-edit.component';

const routes: Routes = [
  {
    path: ':page',
    component: RegionComponent
  }
];


@NgModule({
    imports: [ 
        CommonModule, 
        RouterModule, 
        RouterModule.forChild(routes) 
    ],
    declarations: [ 
        RegionComponent,
        RegionEditComponent 
    ],
    exports: [ 
        RegionComponent, 
        RegionEditComponent,
        RouterModule 
    ]
})
export class RegionModule {}
