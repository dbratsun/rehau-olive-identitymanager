import { Injectable } from "@angular/core";
import { Region } from "./region";
import { User } from './user';
import { Division } from './division';

@Injectable()
export class StaticDataSource {
    private regions: Region[];
    private users: User[];
    private division: Division[];
    private regionLocator = (r: Region, id: number) => r.id == id;

    constructor() {
        this.users = new Array<User>(
            new User(1, "bratdmi", new Date(1966, 6, 14), "dmitrij.bratsun@rehau.com", "+79268007822", new Array<Region>(), new Array<Division>()),
            new User(2, "petrrom", new Date(1976, 3, 24), "roman.petrow@rehau.com", "+79268007832", new Array<Region>(), new Array<Division>()),
            new User(3, "vasiand", new Date(1973, 11, 3), "andrej.vasiljev@rehau.com", "+79268007844", new Array<Region>(), new Array<Division>())
        );
        this.regions = new Array<Region>(
            new Region(1, "Moscow", 3251, "The biggest region in Russia", new Array<User>()), 
            new Region(2, "Sankt-Petersburg", 3253, "The most beatiful region in Russia", new Array<User>()),
            new Region(3, "Rostov on Don", 3252, "The hottest region in Russia", new Array<User>()),
            new Region(4, "Novosibirsk", 3254, "The coldest region in Russia", new Array<User>())
        );
        this.division = new Array<Division>(
            new Division(1, "Windows Solution", "WS", "Windows Solution", new Array<User>()),
            new Division(2, "Building Solution", "BS", "Building Solution", new Array<User>()),
            new Division(3, "Furniture Solution", "FS", "Furniture Solution", new Array<User>())
        );
        this.regions[0].users.push(this.users[0]);
        this.regions[1].users.push(this.users[0], this.users[1]);
        this.regions[2].users.push(this.users[0], this.users[2]);
        this.regions[3].users.push(this.users[0], this.users[1], this.users[2]);

        this.division[0].users.push(this.users[0]);
        this.division[1].users.push(this.users[0], this.users[1]);
        this.division[2].users.push(this.users[0], this.users[2]);

        this.users[0].division.push(this.division[0], this.division[1], this.division[2]);
        this.users[1].division.push(this.division[1]);
        this.users[2].division.push(this.division[2]);

        this.users[0].regions.push(this.regions[0], this.regions[1], this.regions[2], this.regions[3]);
        this.users[1].regions.push(this.regions[1], this.regions[3]);
        this.users[2].regions.push(this.regions[2], this.regions[3]);
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

