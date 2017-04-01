import { User } from './user';

export class Region {
    id: string;
    name: string;
    number: number;
    description: string;
    users: User[]    
}