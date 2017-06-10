import { Region } from './region';
import { Division } from './division';

export class User {
    constructor(
        public id?: number,
        public username?: string,
        public fullname?: string,
        public birthdate?: Date,
        public email?: string,
        public phonenumber?: string,
        public regions?: Region[],
        public division?: Division[]
    ) {}
}

