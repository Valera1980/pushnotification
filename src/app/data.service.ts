import { IData } from './parent/parent.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _data: IData[] = [];
  constructor() { }
  get data(): IData[] {
    console.log('getter');
    const arr: IData[] = [
      {name: '111', age: 11},
      {name: '222', age: 22},
      {name: '333', age: 33},
    ]
    .map((obj: IData) => Object.freeze(obj));
    this._data = arr;
    return this._data;
  }
  set data(d: IData[]) {
    console.log(d);
    this._data = [...d, ...this._data];
  }
}
