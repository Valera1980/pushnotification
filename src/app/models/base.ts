export abstract class ModelBase<T> {
   abstract id: number;
   abstract isNew: boolean;
   abstract toJson(): any;
   abstract clone(): T;
}
