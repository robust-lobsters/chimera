export type CustomsStatus =
  | '반출완료'
  | '반출신고'
  | '수입신고수리'
  | '반입신고'
  | '수입(사용소비) 결재통보'
  | '수입(사용소비) 심사진행'
  | '수입신고'
  | '하기신고 수리'
  | '입항적재화물목록 운항정보 정정'
  | '입항보고 수리'
  | '입항보고 제출'

export const ParseCustomsUi = (txt?: CustomsStatus) => {
  switch (txt) {
    case '반출완료':
      return '물품이 택배사에 인계되었어요'
    case '반출신고':
      return '물품이 택배사에 인계되었어요'
    case '수입신고수리':
      return '통관이 완료되었어요'
    case '반입신고':
      return '물품이 세관에 있어요. 관부가세 문제가 없다면 통관 중이에요'
    case '수입(사용소비) 결재통보':
      return '관부가세 납부 대상인 경우 납부가 필요해요'
    case '수입신고':
      return '물품이 운송 중이에요'
    case '하기신고 수리':
      return '물품이 운송 중이에요'
    case '입항적재화물목록 운항정보 정정':
      return '물품이 운송 중이에요'
    case '입항보고 수리':
      return '물품이 운송 중이에요'
    case '입항보고 제출':
      return '물품이 운송 중이에요'
  }
}
