import { User } from './user';

export class Region {
    constructor (	
        public id: string,
        public name: string,
        public number: number,
        public description?: string,
        public users?: User[]
    ) {}    
}