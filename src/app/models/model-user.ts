
interface IUser {
    name: string;
    age: number;
    toJson: () => UserJson;
}
type UserJson = Pick<IUser, 'age' | 'name' >;
type UserConstructor = Pick<IUser, Exclude<keyof IUser, 'toJson'>>;
export class ModelUser implements IUser {
    private _name: string;
    private _age: number;
    constructor({name = '', age = null}:
    Partial<UserConstructor> = {}) {
        this._name = name;
        this._age = age;
    }
    get name(): string {
        return this._name;
    }
    get age(): number {
        return this._age;
    }
    set name(name: string) {
         this._name = name;
    }
    set age(a: number) {
         this._age = a;
    }
    toJson(): UserJson {
        return {
            name: this._name,
            age: this._age
        };
    }
}
