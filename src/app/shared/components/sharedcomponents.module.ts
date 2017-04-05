import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth/auth.component';
import { AuthStatusComponent } from './auth/authstatus.component';
import { LoaderComponent } from './loader/loader.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { NavItemButtonComponent } from './nav-item/nav-item-button.component';

export const COMPONENTS = [
    NavItemButtonComponent,
    LoaderComponent,
    ErrorMessageComponent,
    AuthComponent, 
    AuthStatusComponent
]

@NgModule({
    imports: [ 
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class SharedComponentsModule {}
