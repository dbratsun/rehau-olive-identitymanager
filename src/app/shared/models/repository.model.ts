import { Injectable } from "@angular/core";
import { Region } from "./region";
import { Observable } from "rxjs/Observable";
import { StaticDataSource } from "./mock.datasource";

@Injectable()
export class Repository {
    private regions: Region[] = new Array<Region>();
    
    constructor(private dataSource: StaticDataSource) {
        this.regions = this.dataSource.getRegion();
    }

    getRegions() : Region[] {
        return this.regions;
    }

    getRegion(id: string): Region {
        return this.regions.find(r => r.id == id)
    }
}