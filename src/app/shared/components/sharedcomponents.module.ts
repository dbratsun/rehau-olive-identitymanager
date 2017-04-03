import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth/auth.component';
import { AuthStatusComponent } from './auth/authstatus.component';
// import { NavItemComponent } from './nav-item/nav-item.component';

export const COMPONENETS = [
    // NavItemComponent,
    AuthComponent, 
    AuthStatusComponent
]

@NgModule({
    imports: [ 
        CommonModule
    ],
    declarations: COMPONENETS,
    exports: COMPONENETS
})
export class SharedComponentsModule {}
