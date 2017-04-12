import { Injectable } from "@angular/core";
import { Region } from "./region";
import { Observable } from "rxjs/Observable";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class Repository {
    private regions: Region[] = new Array<Region>();
    private regionLocator = (r: Region, id: number) => r.id == id;
    
    constructor(private dataSource: StaticDataSource) {
        // this.regions = this.dataSource.getRegions();
        this.regions = new Array<Region>();
        this.dataSource.getRegions().forEach(r => this.regions.push(r));
    }

    getRegions() : Region[] {
        return this.regions;
    }

    getRegion(id: number): Region {
        return this.regions.find(r => this.regionLocator(r, id));
    }

    saveRegion(region: Region) {
        if (region.id == 0 || region.id == null) {
            region.id = this.generateID();
            this.regions.push(region);
        } else {
            let index = this.regions.findIndex(p => this.regionLocator(p, region.id));
            this.regions.splice(index, 1, region);
        }
       //  this.dataSource.saveRegion(region);
    }

    private generateID(): number {
        let candidate = 100;
        while (this.getRegion(candidate) != null) {
            candidate++;
        }
        return candidate;
    }
    
    deleteRegion(id: number) {
        let index = this.regions.findIndex(p => this.regionLocator(p, id));
        if (index > -1) {
            this.regions.splice(index, 1);
        }
        // this.dataSource.deleteRegion(id);
    }
}