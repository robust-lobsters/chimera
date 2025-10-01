import { FixedCTA } from 'components/FixedCTA'
import { Input } from 'components/Input'
import { Section } from 'components/Section'
import { useAtom, useSetAtom } from 'jotai'
import { RssSubsFormAtom } from './RssSubsForm.atom'
import { FeedCacheAtom, SubscribedRSSAtom } from './RSS.atom'
import { useRSS } from 'features/rss-subs/use-rss'
import { useEffect } from 'react'

export function RSSSubsForm() {
  const [f, setForm] = useAtom(RssSubsFormAtom)
  const [subs, setSubs] = useAtom(SubscribedRSSAtom)
  const [feeds, isLoading] = useRSS(subs)
  const setFeedCache = useSetAtom(FeedCacheAtom)

  const onSubscribe = ({ key, url }: { key: string; url: URL | string }) => {
    setSubs(prev => prev.filter(i => i.key !== key && i.url !== url).concat({ key, url }))
  }

  useEffect(() => {
    setFeedCache(feeds)
  }, [feeds])

  return (
    <Section>
      <form onSubmit={e => e.preventDefault()}>
        <Input
          name="key"
          value={f.key}
          placeholder="RSS 이름"
          onChange={e =>
            setForm(prev => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <Input
          name="url"
          value={f.url}
          placeholder="RSS URL"
          onChange={e =>
            setForm(prev => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <FixedCTA
          disabled={isLoading || Boolean(!f.key.trim().length) || Boolean(!f.url.trim().length)}
          gridType="1Col"
          onConfirm={() => onSubscribe({ key: f.key, url: f.url })}
          confirmTxt="구독하기"
        />
      </form>
    </Section>
  )
}
