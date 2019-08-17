import { Injectable } from '@angular/core';
import { ModelBase } from 'src/app/models/base';

@Injectable({
  providedIn: 'root'
})
export class CopyModelsService {

  constructor() { }
  copy<T extends ModelBase>(type: new(p: any) => T, model: T): T {
     return new type(model.toJson());
  }
  build<T extends ModelBase, P extends Partial<T>>(type: new(p: P) => T, params: P): T {
    return new type(params);
  }
}
