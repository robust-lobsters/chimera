import { FixedCTA } from 'components/FixedCTA'
import { Section } from 'components/Section'
import { Top } from 'components/Top'

export function StartPage() {
  return (
    <>
      <Top />
      <Section>메뉴 아직 없는데용</Section>
      <FixedCTA
        gridType="1Col"
        onConfirm={() => {
          console.log('??')
        }}
        confirmTxt="열어 당장"
      />
    </>
  )
}
