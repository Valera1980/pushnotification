import { ModelBase } from './base';

export interface  IUser {
    id: number;
    isNew: boolean;
    name: string;
    age: number;
    email: string;
    some?: any;
}
export type UserSerialize = Pick<IUser, 'age' | 'name' | 'email' | 'id' | 'isNew' >;
export type UserConstructor = Pick<Partial<IUser>, Exclude<keyof IUser, 'toJson'>>;
export class ModelUser extends ModelBase<ModelUser, UserSerialize> implements IUser {
    private _isNew: boolean;
    private _id: number;
    private _name: string;
    private _age: number;
    private _email: string;
    some: Readonly<any>;
    constructor({id = 0, isNew = false, name = '', age = 0, email = '', some}:
    UserConstructor = {}
    ) {
        super();
        this._id = id;
        this._isNew = isNew,
        this._name = name;
        this._age = age;
        this._email = email;
        this.some = some;
    }
    get id(): number {
        return this._id;
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
    get isNew(): boolean {
        return this._isNew;
    }
    set id(id: number) {
        this._id = id;
    }
    set isNew(isn: boolean) {
        this._isNew = isn;
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
    toJson(): UserSerialize {
        return {
            id: this._id,
            isNew: this._isNew,
            email: this._email,
            name: this._name,
            age: this._age
        };
    }
    clone(): ModelUser {
      return new ModelUser(this.toJson());
    }

}
