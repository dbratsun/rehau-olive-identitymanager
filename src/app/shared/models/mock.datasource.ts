import { Injectable } from "@angular/core";
import { Region } from "./region";

@Injectable()
export class StaticDataSource {
    private data: Region[];

    constructor() {
        this.data = new Array<Region>(
            new Region("1", "Moscow", 3251, "The biggest region in Russia"),
            new Region("2", "Sankt-Petersburg", 3253, "The most beatiful region in Russia"),
            new Region("3", "Rostov on Don", 3252, "The hottest region in Russia"),
            new Region("4", "Novosibirsk", 3254, "The coldest region in Russia"))
    }

    getRegion(): Region[] {
        return this.data;
    }
}

