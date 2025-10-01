import type { FeedMap } from 'features/rss-subs/use-rss'
import { atomWithStorage } from 'jotai/utils'

export const SubscribedRSSAtom = atomWithStorage<Record<string, URL | string>[]>('SubscribedRSS', [])

export const FeedCacheAtom = atomWithStorage<FeedMap[]>('FeedCache', [])
