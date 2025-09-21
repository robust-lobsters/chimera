type Fn = (...args: any[]) => any

export type Composed<Fns extends Fn[]> = Fns extends [infer F]
  ? F extends Fn
    ? F
    : never
  : Fns extends [infer F, ...infer R]
  ? R extends Fn[]
    ? F extends (arg: ReturnType<Composed<R>>) => any
      ? (...args: Parameters<Composed<R>>) => ReturnType<F>
      : never
    : never
  : never

/**
 * Compose functions from first to last parameters
 * e.g.
 * ```
 * compose(toString, square, add)(1,2,3)
 * ```
 * is identical to
 * ```
 *    toString(square(add(1,2,3))))
 * ```
 */
export function compose<Fns extends [Fn, ...Fn[]]>(...fns: Fns): Composed<Fns> {
  return ((...args: any[]) =>
    fns.reduceRight(
      (prev, fn, idx) => (idx === fns.length - 1 ? fn(...(prev as any)) : fn(prev)),
      args
    )) as Composed<Fns>
}
