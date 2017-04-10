import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';

import { AuthComponent } from './auth/auth.component';
import { AuthStatusComponent } from './auth/authstatus.component';
import { LoaderComponent } from './loader/loader.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { NavItemButtonComponent } from './nav-item/nav-item-button.component';
import { DatagridSettingsComponent } from './datagrid/datagrid-settings.component';

export const COMPONENTS = [
    DatagridSettingsComponent,
    NavItemButtonComponent,
    LoaderComponent,
    ErrorMessageComponent,
    AuthComponent, 
    AuthStatusComponent
]

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ClarityModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class SharedComponentsModule {}
