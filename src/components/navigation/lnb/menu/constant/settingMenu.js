/** 상점 설정 탭 */
/** 기본정보 */
const SETTING_DEFAULT_MENU = [
  { id: 'IAD-C1000', title: '사이트 정보', path: ['/setting/default/site'], isView: 'all' },
  { id: 'IAD-C2000', title: '관리자 정보', path: ['/setting/default/admin'], isView: 'all' },
  { id: 'IAD-C3000', title: '주소지 정보', path: ['/setting/default/address'], isView: 'all' },
]

/** 회원가입 */
const SETTING_MEMBER_MENU = [
  { id: 'IAD-D1000', title: '기본 로그인', path: ['/setting/member/join'], isView: 'all' },
  { id: 'IAD-D2000', title: '소셜 로그인', path: ['/setting/member/social'], isView: 'all' },
  { id: 'IAD-D3000', title: '가입약관', path: ['/setting/member/terms'], isView: 'all' },
  { id: 'IAD-D4000', title: '본인인증', path: ['/setting/member/identity'], isView: 'all' },
]

/** 운영환경 */
const SETTING_MANAGE_MENU = [
  { id: 'IAD-E1000', title: '상담 설정', path: ['/setting/manage/channel'], isView: 'all' },
  { id: 'IAD-E3000', title: '도메인 설정', path: ['/setting/manage/domain'], isView: 'all' },
  { id: 'IAD-E4000', title: 'SEO 설정', path: ['/setting/manage/seo'], isView: 'all' },
]

/** 쇼핑환경  */
const SETTING_SHOPPING_MENU = [{ id: 'IAD-F0000', title: '쇼핑환경', path: ['/setting/shopping/order'], isView: 'all' }]

/** 결제수단  */
const SETTING_PAYMENT_MENU = [
  { id: 'IAD-G1000', title: '전자결제', path: ['/setting/payment/pg'], isView: 'all' },
  { id: 'IAD-G2000', title: '휴대폰결제', path: ['/setting/payment/mobile'], isView: 'all' },
  { id: 'IAD-G3000', title: '무통장입금', path: ['/setting/payment/bankTransfer'], isView: 'all' },
]

export const SETTING_SUB = {
  SETTING_DEFAULT_MENU: SETTING_DEFAULT_MENU,
  SETTING_MEMBER_MENU: SETTING_MEMBER_MENU,
  SETTING_MANAGE_MENU: SETTING_MANAGE_MENU,
  SETTING_SHOPPING_MENU: SETTING_SHOPPING_MENU,
  SETTING_PAYMENT_MENU: SETTING_PAYMENT_MENU,
}
