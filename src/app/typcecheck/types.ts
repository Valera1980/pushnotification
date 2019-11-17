import { Animal, Person } from './types';
export interface Person {
    name: string;
    age: number;
}
export interface Animal {
    name: string;
    type: 'cat' | 'dog';
}
export function isAnimal(item: PersonOrAnimal): item is Animal {
    return (item as Animal).type !== undefined;
}
export function isPerson(item: PersonOrAnimal): item is Person {
    return (item as Person).age !== undefined;
}
export type PersonOrAnimal = Animal | Person;
