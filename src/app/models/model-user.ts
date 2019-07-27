import { ModelBase } from './base';

interface  IUser {
    name: string;
    age: number;
    email: string;
}
type UserJson = Pick<IUser, 'age' | 'name' | 'email' >;
type UserConstructor = Pick<Partial<IUser>, Exclude<keyof IUser, 'toJson'>>;
export class ModelUser extends ModelBase<UserJson> implements IUser {
    private _name: string;
    private _age: number;
    private _email: string;

    constructor({name = '', age = null, email = ''}:
    UserConstructor = {}
    ) {
        super();
        this._name = name;
        this._age = age;
        this._email = email;
    }

    get name(): string {
        return this._name;
    }
    get age(): number {
        return this._age;
    }
    get email(): string {
        return this._email;
    }
    set name(name: string) {
         this._name = name;
    }
    set age(a: number) {
         this._age = a;
    }
    set email(email: string) {
        this._email = email;
    }
    toJson(): UserJson {
        return {
            email: this._email,
            name: this._name,
            age: this._age
        };
    }
}
