import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

// import { routing } from './app.routes';

import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ModulesModule } from './modules/modules.module';
import { SharedComponentsModule } from './shared/components/sharedcomponents.module';
import { ServicesModule } from './shared/services/services.module';
import { MockXHRBackend } from './shared/services/mock.xhr-backend.service';

import { ClarityModule } from 'clarity-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // routing,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ServicesModule.forRoot(),
    CoreModule,
    ModulesModule,
    SharedComponentsModule,
    ClarityModule.forRoot()
  ],
  providers: [
    { provide: XHRBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
