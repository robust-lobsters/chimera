export type ResponseType = 'json' | 'text' | 'blob'

export const Fetch = async <Req = unknown, Res = unknown>(
  url: string | URL,
  method: any,
  fetchType?: 'json' | 'text' | 'blob',
  req?: Req,
  headers?: HeadersInit,
  opts?: RequestInit
): Promise<Res> => {
  const response = await fetch(url, {
    method,
    body: JSON.stringify(req),
    headers,
    ...opts,
  })

  switch (fetchType) {
    case 'blob':
      return (await response.blob()) as Res
    case 'text':
      return (await response.text()) as Res
    default:
      return (await response.json()) as Res
  }
}
