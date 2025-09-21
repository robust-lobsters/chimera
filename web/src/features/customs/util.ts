export const isError = (tCnt: string | undefined) => {
  if (!tCnt || Number(tCnt) < 1) return true
  return false
}
