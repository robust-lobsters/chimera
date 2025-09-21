type Fn = (...args: any[]) => any

export type PipeFrom<Acc extends Fn, Rest extends Fn[]> = Rest extends [
  infer G extends (arg: ReturnType<Acc>) => any,
  ...infer Tail extends Fn[]
]
  ? PipeFrom<(...args: Parameters<Acc>) => ReturnType<G>, Tail>
  : Acc

export type Piped<Fns extends [Fn, ...Fn[]]> = Fns extends [
  infer F extends Fn,
  ...infer Rest extends Fn[]
]
  ? PipeFrom<F, Rest>
  : never

/**
 * Pipe functions from first to last parameters
 * e.g.
 * ```
 * pipe(split, add, square)(1,2,3)
 * ```
 * is identical to
 * ```
 *    toString(square(add(1,2,3)))
 * ```
 */
export function pipe<Fns extends [Fn, ...Fn[]]>(...fns: Fns): Piped<Fns> {
  return ((...args: any[]) =>
    fns.reduce(
      (prev, fn, idx) => (!idx ? (fn as any)(...prev) : (fn as any)(prev)),
      args
    )) as Piped<Fns>
}
