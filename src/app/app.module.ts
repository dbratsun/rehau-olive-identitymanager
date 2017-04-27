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
import { ModelsModule } from './shared/models/models.module';
import { Repository } from './shared/models/repository.model';

import { ClarityModule } from 'clarity-angular';
// import { GenericTableModule } from '@angular-generic-table/core';

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
    ModelsModule,
    SharedComponentsModule,
    ClarityModule.forRoot()
    // GenericTableModule
  ],
  providers: [
    Repository, // Class provider with dependencies https://angular.io/docs/ts/latest/guide/dependency-injection.html
    { provide: XHRBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
