import { Injectable } from "@angular/core";
import { Region } from "./region";
import { Observable } from "rxjs/Observable";
import { StaticDataSource } from "./mock.datasource";

@Injectable()
export class Repository {
    private regions: Region[] = new Array<Region>();
    
    constructor(private dataSource: StaticDataSource) {
        this.regions = this.dataSource.getRegions();
    }

    getRegions() : Region[] {
        return this.regions;
    }

    getRegion(id: number): Region {
        return this.regions.find(r => r.id == id)
    }

    saveRegion(region: Region) {
        this.dataSource.saveRegion(region);
    }
    
    deleteRegion(id: number) {
        this.dataSource.deleteRegion(id);
    }
}