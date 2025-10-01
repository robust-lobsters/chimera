import pMap from 'p-map'
import { useEffect, useState } from 'react'

export type Feed = {
  title: string | undefined
  link: string | undefined
  description: string | undefined
  pubDate: string | undefined
}
export type FeedMap = {
  name: string
  feed: Feed[]
}[]

/** Backend 필요 */
export function useRSS(subs: Record<string, URL | string>[]) {
  const [feeds, setFeeds] = useState<FeedMap[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const parseRSS = async (url: string) => {
      const response = await fetch(url)
      const text = await response.text()
      const parser = new DOMParser()
      const xml = parser.parseFromString(text, 'text/xml')

      const items = Array.from(xml.querySelectorAll('item, entry')).map(item => ({
        title: item.querySelector('title')?.textContent,
        link: item.querySelector('link')?.textContent,
        description: item.querySelector('description, summary')?.textContent,
        pubDate: item.querySelector('pubDate, published')?.textContent,
      }))

      return items
    }

    ;(async () => {
      if (subs.length === 0) return

      try {
        setIsLoading(true)
        const feedMap = await pMap(subs, async sub => {
          const [name, url] = Object.entries(sub)[0]
          const feed = await parseRSS(url.toString())
          return { name, feed }
        })
        setFeeds(prev => [...prev, feedMap])
      } catch (e) {
        console.warn(e)
        setFeeds([])
      } finally {
        setIsLoading(false)
      }
    })()
  }, [subs])

  return [feeds, isLoading] as const
}
