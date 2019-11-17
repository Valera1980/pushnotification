import { CopyModelsService } from './../services/deepcopy/copy.service';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ModelUser } from '../models/model-user';

interface III {
  a: string;
  b: any;
}
// type roa = Readonly<III[]>;
type Roa = ReadonlyArray<III>;

interface ISaveOrderStrategy {
  save(id: number): void;
}

class SaveTarget implements ISaveOrderStrategy {
  save(id: number): void {
    console.log(`Save order TARGET with id=${id}`);
  }
}
class SaveService implements ISaveOrderStrategy {
  save(id: number): void {
    console.log(`Save order SERVICE with id=${id}`);
  }
}

class OrderDealer {

  private _strategy: ISaveOrderStrategy;
  private _id: number;
  constructor(id: number, str: ISaveOrderStrategy) {
    this._strategy = str;
    this._id = id;
  }

  save(): void {
    this._strategy.save(this._id);
  }
}

export interface IData {
  name: string;
  age: number;
}
type RoUser = Readonly<ModelUser>;
type Ext = Exclude<IData, 'age'>;
interface IExt { age: number; }
function isUser(user: any): user is ModelUser {
  return (user as ModelUser).name !== undefined;
}
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  constructor(
    private _dataService: DataService,
    private _copyModelServicevice: CopyModelsService
  ) { }

  data: IData[] = [];
  title = 'News title ++++++++++++++++++++++++++++';
  content = 'A description should be here!';
  user = Object.freeze(new ModelUser({name: 'Valera', age: 39, email: 'gavrilow777@gmail.com'}));
  ngOnInit() {
    this.data = this.getDataM();

  }
  changeNameChild() {
    this.user = new ModelUser({...this.user.toJson(), ...{name: '0000000000'}});
  }
  changeName(): void {
    const n = new Date().getTime().toString();
    const obj = { ...{}, ...{ name: 'g ' + name, age: 27 } };
    const newData = this._dataService.data.map((i: IData) => {
      return { ...i, ...{ name: n, age: 99 } };
    });
    console.log(newData);
    // this._dataService.data = newData;
    this.data = this.copyData();

    // console.log(obj === this.data);
    // this.data = obj;
  }
  getDataM(): IData[] {
    return this._dataService.data;
  }
  copyData(): IData[] {
    const n = new Date().getTime().toString();
    const newArr = this.data.map(i => {
      return { name: n, age: 77 };
    });
    return newArr;
    // newArr.forEach(i => {
    //   return {...i,...{name: n, age: 77} }
    // });


  }
  run(): void {
    const user = new ModelUser({ name: '99999999', age: 22, email: 'gavrilow777@gmail.com' });
    user.name = 'hhhhhhhh';
  
    // const user = this._copyModelServicevice.build(ModelUser, {age: 55, name: 'trtr', email: '000'});
    // const user1 = user;
    // const userCopy = this._copyModelServicevice.copy(ModelUser, user);
    // console.log(user.toJson());
    // console.log(userCopy.toJson());
    // // console.log(userCopy.toJson());
    // console.log(user === user1);
    // console.log(user === userCopy);
    const immutUser = Object.freeze(user);
    console.log(immutUser);
    // immutUser.email = 'ooooo@jjj.ll';
    const a = { name: 'tttt', age: 33 } as const;
    const { name, age, ...rest } = a;
    console.log(rest);
    // const t: IExt = { age: 777, uuu: ''};

  }
  pps() {
    const obj: Readonly<{name: string, age: number, info: any}>
    = this.freezeObj({ name: 'Valera', age: 39, info: { email: 'gavrilow777@gmail.com'}}) ;
    // obj.info.email = 'uouu';
    console.log(obj);
    const f = (all: number, current: number): number => {
      return all + current;
    };
    const arr: ReadonlyArray<III> = [{ a: 'aaa', b: 111 }, { a: 'aaa', b: 333 }, { a: 'bbb', b: { sss: 999 } }];
    const a = [1, 2, 3, 4, 5];
    const u = a.reduce((acc: number, i: number) => f(acc, i), 0);
    console.log(u);

  }
  freezeObj<T>(obj: T): T {
    for (const value of Object.values(obj)) {
      Object.freeze(value);
      if (typeof value === 'object') {
        this.freezeObj(value);
      }
    }
    return obj;
  }

  frezeArr<T>(arr: T[]): T[] {
    arr.forEach(item => {
      Object.freeze(item);
      const values = Object.values(item);
      for (const v of values) {
        if (typeof v === 'object') {
          this.frezeArr([v]);
        }
      }
    });
    return arr;
  }

}



