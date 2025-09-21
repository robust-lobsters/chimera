export const clamp = (min: number, prefer: number, max: number) =>
  Math.min(max, Math.max(min, prefer))
