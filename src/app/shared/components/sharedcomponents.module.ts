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

import { GenericModalComponent } from "./dialog/generic/generic-modal.component";
import { CommentDialogComponent } from "./dialog/components/comment/comment-dialog.component";

import { GenericListComponent } from "./list/generic/generic-list.component";
import { GenericEditorComponent } from "./editor/generic/generic-editor.component";

export const COMPONENTS = [
    DatagridSettingsComponent,
    NavItemButtonComponent,
    LoaderComponent,
    ErrorMessageComponent,
    AuthComponent, 
    AuthStatusComponent,
    GenericModalComponent,
    CommentDialogComponent,
    GenericListComponent,
    GenericEditorComponent
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
