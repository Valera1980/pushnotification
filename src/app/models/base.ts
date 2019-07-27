export abstract class ModelBase<R> {
    // constructor(protected t: R) {

    // }
    abstract toJson(): R;
}
