import { Fetch, type ResponseType } from './_internal'

export const http = {
  async get<Res>(path: string, type: ResponseType = 'json', options?: Omit<RequestInit, 'method' | 'body'>) {
    const result = await Fetch<undefined, Res>(path, 'GET', type, undefined, undefined, { ...options })
    return result
  },
  async post<Req, Res>(path: string, type: ResponseType = 'json', json?: Req, options?: Omit<RequestInit, 'method' | 'body'>) {
    const result = await Fetch<Req, Res>(path, 'POST', type, json, undefined, {
      ...options,
    })
    return result
  },
}
