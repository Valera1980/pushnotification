import { Injectable } from '@angular/core';
import { ModelBase } from 'src/app/models/base';

@Injectable({
  providedIn: 'root'
})
export class CopyModelsService {

  constructor() { }
  copy<T extends ModelBase<T, S>, S>(type: new(p: any) => T, model: T): T {
     return model.clone();
  }
  copyArray<T extends ModelBase<T, S>, S>(arr: T[] | ReadonlyArray<T>): T[] {
      return arr.map(item =>  item.clone());
  }
  build<T extends ModelBase<T, S>, P extends Partial<T>, S>(type: new(p: P) => T, params: P): T {
    return new type(params);
  }
  isEqual<T extends ModelBase<T, S>, S>(model1: T, model2: T): boolean {
     for (const [ key, ] of Object.entries(model1)) {
       if (model1[key] !== model2[key]) {
         return false;
       }
     }
     return true;
  }
  compareArr<T extends ModelBase<T, S>, S>(arr1: T[] | ReadonlyArray<T>, arr2: T[] | ReadonlyArray<T>): boolean {
    for (const item1 of arr1) {
      const itemForcompare = arr2.find(item => item.id == item1.id);
      if (!itemForcompare) {
        continue;
      }
      if (!this.isEqual<T, S>(item1, itemForcompare)) {
         return false;
      }
    }
  }
  getDifference<T extends ModelBase<T, S>, S>(etalonArr: T[] | ReadonlyArray<T>, arr2: T[] | ReadonlyArray<T>): T[] {
    const diffArr = [] as T[];
    for (const item1 of etalonArr) {
      const comparedItem = arr2.find(item => item.id === item1.id);
      if (!comparedItem) {
        continue;
      }
      if (!this.isEqual<T, S>(item1, comparedItem) ) {
        diffArr.push(comparedItem);
      }
    }
    return diffArr;
  }
}
