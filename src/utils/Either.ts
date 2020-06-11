export type Left<E> = {
  isRight: false;
  error: E;
}

export const left = <E>(error: E): Left<E> => ({
  isRight: false,
  error,
});

export type Right<V> = {
  isRight: true;
  value: V;
};

export const right = <V>(value: V): Right<V> => ({
  isRight: true,
  value,
})

export type Either<E, V> = Left<E> | Right<V>;

export const either = <E, V>(e: Either<E, V>) => ({
  map: <U>(f: (v: V) => U) => e.isRight ? right(f(e.value)) : e,
  flatMap: <U>(f: (v: V) => Either<E, U>) => e.isRight ? f(e.value) : e,
  toRight: (f: (e: E) => V) => e.isRight ? e : right(f(e.error)),
  merge: <U>(f: (v: V) => U, g: (e: E) => U) => e.isRight ? f(e.value) : g(e.error),
});
