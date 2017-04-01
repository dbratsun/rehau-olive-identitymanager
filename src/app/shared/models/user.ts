import { Region } from './region';
import { Division } from './division';

export class User {
    id: string;
    username: string;
    birthdate: Date;
    email: string;
    phonenumber: string;
    regions: Region[]
}