import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegionComponent } from './components/region/region.component'

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
    ],
    exports: [ 
        RegionComponent, 
        RouterModule 
    ]
})
export class RegionModule {}
