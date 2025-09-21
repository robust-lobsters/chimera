import { Divider } from 'components/Divider'
import { Top } from 'components/Top'
import { CustomsForm } from 'sections/customs/CustomsForm'

export function CustomsPage() {
  return (
    <>
      <Top
        title={
          <>
            운송장 번호를 <br /> 입력해 주세요
          </>
        }
        subtitle={<>택배사 송장 번호로 통관상태를 알 수 있어요</>}
      />
      <Divider size={3} />
      <CustomsForm />
    </>
  )
}
