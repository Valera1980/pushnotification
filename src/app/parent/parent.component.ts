import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

export interface IData {
  name: string;
  age: number;
}
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  data: IData[] = [];
  constructor(
    private _dataService: DataService
  ) { }
  ngOnInit() {
    this.data = this.getDataM();
    
  }
  changeName(): void {
    const n = new Date().getTime().toString();
    const obj = {...{}, ...{name: 'g ' + name, age: 27}};
    const newData = this._dataService.data.map((i:IData) => {
      return {...i, ...{ name: n, age: 99}};
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
  copyData(): IData[]{
    const n = new Date().getTime().toString();
    const newArr = this.data.map(i => {
      return {name: n, age: 77} ;
    });
    return newArr;
    // newArr.forEach(i => {
    //   return {...i,...{name: n, age: 77} }
    // });


  }


}
