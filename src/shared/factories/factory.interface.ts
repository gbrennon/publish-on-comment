export interface Factory<T, P> {
  create(parameters: P): T;
}
