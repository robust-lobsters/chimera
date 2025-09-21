export type CustomsData = CargCsclPrgsInfoQryRtnVo;
export interface CustomsResponseData {
  cargCsclPrgsInfoQryRtnVo: CargCsclPrgsInfoQryRtnVo;
}

/**
 * (1) 최상위 루트: cargCsclPrgsInfoQryRtnVo
 */
export interface CargCsclPrgsInfoQryRtnVo {
  /**
   * 알림/공지 정보 (명세서에 별도 설명은 없으나, 통상 비어있을 수 있음)
   * 에러인 경우 에러메시지
   */
  ntceInfo?: string | null;

  /**
   * 화물 통관 진행 정보
   */
  cargCsclPrgsInfoQryVo?: CargCsclPrgsInfoQryVo;

  /**
   * 총 건수
   * -1인 경우 에러
   */
  tCnt?: string;

  /**
   * 세부 진행 이력 정보
   */
  cargCsclPrgsInfoDtlQryVo?: CargCsclPrgsInfoDtlQryVo[];
}

/**
 * (2) 메인 화물 진행정보: cargCsclPrgsInfoQryVo
 */
export interface CargCsclPrgsInfoQryVo {
  /** cargMtNo (화물관리번호)(19) */
  cargMtNo?: string;
  /** prgsStts (진행상태)(300) */
  prgsStts?: string;
  /** prgsStCd (진행상태코드)(6) */
  prgsStCd?: string;
  /** shipNat (선박국적)(2) */
  shipNat?: string;
  /** shipNatNm (선박국적명)(300) */
  shipNatNm?: string;
  /** mblNo (MBL번호)(20) */
  mblNo?: string;
  /** hblNo (HBL번호)(20) */
  hblNo?: string;
  /** agnc (대리점)(150) */
  agnc?: string;
  /** shcoFlcoSgn (선사항공사부호)(4) */
  shcoFlcoSgn?: string;
  /** shcoFlco (선사항공사)(150) */
  shcoFlco?: string;
  /** cargTp (화물구분)(150) */
  cargTp?: string;
  /** ldprCd (적재항코드)(5) */
  ldprCd?: string;
  /** ldprNm (적재항명)(200) */
  ldprNm?: string;
  /** lodCntyCd (적출국가코드)(2) */
  lodCntyCd?: string;
  /** shipNm (선박명)(75) */
  shipNm?: string;
  /** pckGcnt (포장개수)(10) */
  pckGcnt?: string;
  /** pckUt (포장단위)(2) */
  pckUt?: string;
  /** blPt (B/L유형)(1) */
  blPt?: string;
  /** blPtNm (B/L유형명)(300) */
  blPtNm?: string;
  /** dsprCd (양륙항코드)(5) */
  dsprCd?: string;
  /** dsprNm (양륙항명)(200) */
  dsprNm?: string;
  /** etprCstm (입항세관)(75) */
  etprCstm?: string;
  /** etprDt (입항일자)(8) */
  etprDt?: string;
  /** msrm (용적)(19) */
  msrm?: string;
  /** ttwg (총중량)(19) */
  ttwg?: string;
  /** wghtUt (중량단위)(2) */
  wghtUt?: string;
  /** prnm (품명)(300) */
  prnm?: string;
  /** cntrGcnt (컨테이너개수)(10) */
  cntrGcnt?: string;
  /** cntrNo (컨테이너번호)(11) */
  cntrNo?: string;
  /** csclPrgsStts (통관진행상태)(300) */
  csclPrgsStts?: string;
  /** prcsDttm (처리일시)(14) */
  prcsDttm?: string;
  /** frwrSgn (포워더부호)(4) */
  frwrSgn?: string;
  /** frwrEntsConm (포워더명)(150) */
  frwrEntsConm?: string;
  /** vydf (항차)(7) */
  vydf?: string;
  /** spcnCargCd (특수화물코드)(4) */
  spcnCargCd?: string;
  /** mtTrgtCargYnNm (관리대상화물여부명)(100) */
  mtTrgtCargYnNm?: string;
  /** rlseDtyPridPassTpcd (반출의무과태료여부)(2) */
  rlseDtyPridPassTpcd?: string;
  /** dclrDelyAdtxYn (신고지연가산세여부)(2) */
  dclrDelyAdtxYn?: string;
}

/**
 * (3) 세부 진행 이력 정보: cargCsclPrgsInfoDtlQryVo
 *    (반출입, 처리 이력 등 0..n 개)
 */
export interface CargCsclPrgsInfoDtlQryVo {
  /** cargTrcnRelaBsopTpcd (처리구분)(300) */
  cargTrcnRelaBsopTpcd?: string;
  /** rlbrDttm (반출입일시)(14) */
  rlbrDttm?: string;
  /** rlbrCn (반출입내용)(500) */
  rlbrCn?: string;
  /** pckGcnt (포장개수)(10) */
  pckGcnt?: string;
  /** pckUt (포장단위)(2) */
  pckUt?: string;
  /** wght (중량)(19) */
  wght?: string;
  /** wghtUt (중량단위)(2) */
  wghtUt?: string;
  /** shedSgn (장치장부호)(8) */
  shedSgn?: string;
  /** shedNm (장치장명)(150) */
  shedNm?: string;
  /** prcsDttm (처리일시)(14) */
  prcsDttm?: string;
  /** dclrNo (신고번호)(40) */
  dclrNo?: string;
  /** rlbrBssNo (반출입근거번호)(30) */
  rlbrBssNo?: string;
  /** bfhnGdncCn (사전안내내용)(4000) */
  bfhnGdncCn?: string;
}
