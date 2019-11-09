export abstract class ModelBase<T, S> {
   abstract id: number;
   abstract isNew: boolean;
   abstract toJson(): S;
   abstract clone(): T;
}
