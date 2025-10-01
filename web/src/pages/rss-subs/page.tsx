import { BottomSheet } from 'components/BottomSheet'
import { Divider } from 'components/Divider'
import { FixedCTA } from 'components/FixedCTA'
import { Section } from 'components/Section'
import { Top } from 'components/Top'
import { useAtomValue } from 'jotai'
import { overlay } from 'overlay-kit'
import { FeedCacheAtom } from 'sections/rss-subs/RSS.atom'
import { RSSSubsForm } from 'sections/rss-subs/RssSubsForm'

export function RssSubsPage() {
  const feeds = useAtomValue(FeedCacheAtom)
  return (
    <>
      <Top title={<>RSS 구독 목록</>} subtitle={<>관심있는 피드를 구독하고 알림을 받아보세요</>} />
      <Section>{feeds.length > 0 && <>{feeds.length}</>}</Section>
      <Section>
        <FixedCTA
          gridType="1Col"
          confirmTxt="구독 추가하기"
          onConfirm={() =>
            overlay.open(({ unmount }) => {
              return (
                <BottomSheet size="half" unmount={unmount}>
                  <Top title={<>피드 이름과 {<br />} URL을 알려주세요</>} />
                  <Divider size={3} />
                  <RSSSubsForm />
                </BottomSheet>
              )
            })
          }
        />
      </Section>
    </>
  )
}
