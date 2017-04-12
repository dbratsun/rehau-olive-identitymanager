import { NgModule } from "@angular/core";
import { HttpModule, JsonpModule } from "@angular/http"
import { Repository } from "./repository.model";
import { StaticDataSource } from "./static.datasource";

@NgModule({
    imports: [
        HttpModule, 
        JsonpModule
    ],
    providers: [
        Repository, 
        StaticDataSource
    ]
})
export class ModelsModule { }
