import { Injectable } from "@angular/core";
import { Region } from "./region";

@Injectable()
export class StaticDataSource {
    private regions: Region[];
    private regionLocator = (r: Region, id: number) => r.id == id;

    constructor() {
        this.regions = new Array<Region>(
            new Region(1, "Moscow", 3251, "The biggest region in Russia"),
            new Region(2, "Sankt-Petersburg", 3253, "The most beatiful region in Russia"),
            new Region(3, "Rostov on Don", 3252, "The hottest region in Russia"),
            new Region(4, "Novosibirsk", 3254, "The coldest region in Russia"))
    }

    getRegions(): Region[] {
        return this.regions;
    }

    getMaxRegionId(): number {
        if (this.regions.length > 0) {
            return this.regions.map(value => value.id).sort().pop();
        }
        else return 0;    
    }

    saveRegion(region: Region): Region {
        if ((region.id == 0) || (region.id == null)) {
            region.id = this.getMaxRegionId();
            this.regions.push(region);
        }
        else {
            let r = this.regions.find(value => value.id == region.id);
            let index = this.regions.indexOf(r);
            this.regions[index].name = region.name;
            this.regions[index].number = region.number;
            this.regions[index].description = region.description;
        }
        return region; 
    }

    deleteRegion(id: number) {
        let index = this.regions.findIndex(r => this.regionLocator(r, id));
        if (index > -1) {
            this.regions.splice(index, 1);
        }
    }

}

