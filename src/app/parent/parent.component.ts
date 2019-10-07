import { CopyModelsService } from './../services/deepcopy/copy.service';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ModelUser } from '../models/model-user';

export interface IData {
  name: string;
  age: number;
}
type RoUser = Readonly<ModelUser>;
type Ext = Exclude<IData, 'age'>;
interface IExt { age: number; }
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
  ngOnInit() {
    this.data = this.getDataM()

  }
  changeName(): void {
    const n = new Date().getTime().toString();
    const obj = {...{}, ...{name: 'g ' + name, age: 27}};
    const newData = this._dataService.data.map((i: IData) => {
      return {...i, ...{ name: n, age: 99}};
    });
    console.log(newData);
    // this._dataService.data = newData;
    this.data = this.copyData()

    // console.log(obj === this.data);
    // this.data = obj;
  }
  getDataM(): IData[] {
    return this._dataService.data;
  }
  copyData(): IData[] {
    const n = new Date().getTime().toString();
    const newArr = this.data.map(i => {
      return {name: n, age: 77} ;
    });
    return newArr;
    // newArr.forEach(i => {
    //   return {...i,...{name: n, age: 77} }
    // });


  }
  run(): void {
    const user = new ModelUser({name: '99999999', age: 22, email: 'gavrilow777@gmail.com'});
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
    const a = {name: 'tttt', age: 33} as const;
    const { name, age, ...rest } = a;
    console.log(rest);
    // const t: IExt = { age: 777, uuu: ''};

  }
  pps() {
    console.log(`News title: ${this.title}, News content: ${this.content}`);
  }

}
