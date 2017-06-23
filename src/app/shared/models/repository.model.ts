import { Injectable } from "@angular/core";
import { Region } from "./region";
import { Division } from "./division";
import { User } from "./user";
import { Role } from "./role";
import { Observable } from "rxjs/Observable";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class Repository {
    private regions: Region[] = new Array<Region>();
    private users: User[] = new Array<User>();
    private division: Division[] = new Array<Division>();
    private roles: Role[] = new Array<Role>();
    private regionLocator = (r: Region, id: number) => r.id == id;
    private divisionLocator = (d: Division, id: number) => d.id == id;

    constructor(private dataSource: StaticDataSource) {
        // this.regions = this.dataSource.getRegions();
        this.regions = new Array<Region>();
        this.dataSource.getRegions().forEach(r => this.regions.push(r));
        this.division = new Array<Division>();
        this.dataSource.getDivisions().forEach(d => this.division.push(d));
        this.dataSource.getRoles().forEach(r => this.roles.push(r));
    }

    getUsers() : User[] {
        return this.dataSource.getUsers();
    }

    getRoles() : Role[] {
        return this.dataSource.getRoles();
    }

    getRegions() : Region[] {
        return this.regions;
    }

    getRegion(id: number): Region {
        return this.regions.find(r => this.regionLocator(r, id));
    }

    saveRegion(region: Region) {
        if (region.id == 0 || region.id == null) {
            region.id = this.generateIDforRegion();
            this.regions.push(region);
        } else {
            let index = this.regions.findIndex(p => this.regionLocator(p, region.id));
            this.regions.splice(index, 1, region);
        }
       //  this.dataSource.saveRegion(region);
    }

    deleteRegion(id: number) {
        let index = this.regions.findIndex(p => this.regionLocator(p, id));
        if (index > -1) {
            this.regions.splice(index, 1);
        }
        // this.dataSource.deleteRegion(id);
    }
    private generateIDforRegion(): number {
        let candidate = 100;
        while (this.getRegion(candidate) != null) {
            candidate++;
        }
        return candidate;
    }

    getDivisions() : Division[] {
        return this.division;
    }

    getDivision(id: number): Division {
        return this.division.find(d => this.divisionLocator(d, id));
    }
    
    saveDivision(division: Division) {
        if (division.id == 0 || division.id == null) {
            division.id = this.generateIDforDivision();
            this.division.push(division);
        } else {
            let index = this.division.findIndex(p => this.divisionLocator(p, division.id));
            this.division.splice(index, 1, division);
        }
       //  this.dataSource.saveRegion(region);
    }

    private generateIDforDivision(): number {
        let candidate = 100;
        while (this.getDivision(candidate) != null) {
            candidate++;
        }
        return candidate;
    }

}