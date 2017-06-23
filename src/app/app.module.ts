import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

import { StoreModule, Store, provideStore } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './core/store/store.reducer';

import { RoleListEffects } from './core/store/role/role.effects';

// add log monitor
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

export function instrumentOptions() {
  return {
    monitor: useLogMonitor({ visible: true, position: 'right' })
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    ClarityModule.forRoot(),
    StoreModule.provideStore(reducer),
    EffectsModule.run(RoleListEffects),
    // GenericTableModule
    // log monitor
    StoreDevtoolsModule.instrumentStore(instrumentOptions),
    StoreLogMonitorModule
  ],
  providers: [
    Repository, // Class provider with dependencies https://angular.io/docs/ts/latest/guide/dependency-injection.html
    { provide: XHRBackend, useClass: MockXHRBackend } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
