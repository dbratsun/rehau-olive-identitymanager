import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth/auth.component';
import { AuthStatusComponent } from './auth/authstatus.component';

@NgModule({
    imports: [ 
        CommonModule
    ],
    declarations: [ 
        AuthComponent, 
        AuthStatusComponent
    ],
    exports: [ 
        AuthComponent,
        AuthStatusComponent
    ]
})
export class SharedComponentModule {}
