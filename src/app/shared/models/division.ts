import { User } from './user';

export class Division {
    constructor(
        public id?: number,
        public name?: string,
        public shortname?: string,
        public description?: string,
        public users?: User[]
    ) {}
}