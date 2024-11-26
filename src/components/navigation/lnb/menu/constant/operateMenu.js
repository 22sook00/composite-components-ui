/** 운영관리 탭 */
/** 홈 */
const DASH_BOARD = [{ id: 'IAD-00000', title: '대시보드', path: ['/dashboard'] }]

/** 상품 */
const PRODUCT_MENU = [
  { id: 'IAD-11000', title: '상품 등록', path: ['/product/add'], isView: 'all' },
  { id: 'IAD-12000', title: '상품 관리', path: ['/product/list', '/product/[id]'], isView: 'all' },
  { id: 'IAD-14000', title: '템플릿 관리', path: ['/product/template'], isView: 'all' },
  { id: 'IAD-15000', title: '카테고리 관리', path: ['/product/category'], isView: 'all' },
]

/** 판매 */
const ORDER_MENU = [
  { id: 'IAD-21000', title: '주문 관리', path: ['/order/list'], isView: 'all' },
  { id: 'IAD-22000', title: '취소 관리', path: ['/order/cancel'], isView: 'all' },
  { id: 'IAD-23000', title: '반품 관리', path: ['/order/refund'], isView: 'all' },
]

/** 쇼핑 연동 */
const LINK_MENU = [
  { id: 'IAD-31000', title: '네이버쇼핑', path: ['/link/naverShopping'], isView: 'all' },
  { id: 'IAD-32000', title: '카카오쇼핑하우', path: ['/link/kakaoShopping'], isView: 'all', isLabel: true },
  { id: 'IAD-33000', title: '지그재그', path: ['/link/zigzagShopping'], isView: 'all', isLabel: true },
  { id: 'IAD-34000', title: '페이스북 채널', path: ['/link/facebookShopping'], isView: 'all', isLabel: true },
  { id: 'IAD-35000', title: '유튜브쇼핑', path: ['/link/youtubeShopping'], isView: 'all', isLabel: true },
]

/** 혜택 */
const BENEFIT_MENU = [
  {
    id: 'IAD-43000',
    title: '쿠폰 관리',
    path: ['/benefit/coupon', '/benefit/coupon/[id]', '/benefit/coupon/add'],
    isView: 'all',
  },
  {
    id: 'IAD-44000',
    title: '적립금 관리',
    path: ['/benefit/point', '/benefit/point/[id]', '/benefit/point/config'],
    isView: 'all',
  },
]

/** 리뷰 */
const REVIEW_MENU = [{ id: 'IAD-51000', title: '리뷰 관리', path: ['/reviews'], isView: 'all' }]

/** 문의 */
const QUESTIONS_MENU = [
  { id: 'IAD-61000', title: '상품 문의 관리', path: ['/questions/product'], isView: 'all' },
  { id: 'IAD-62000', title: '1:1 문의 관리', path: ['/questions/inquiry'], isView: 'all' },
]

/** 회원 */
const MEMBER_MENU = [
  {
    id: 'IAD-71000',
    title: '회원 관리',
    path: ['/member/info', '/member/info/[id]', '/member/add'],
    isView: 'all',
  },
  { id: 'IAD-72000', title: '그룹 관리', path: ['/member/group'], isView: 'all' },
  { id: 'IAD-73000', title: '등급 관리', path: ['/member/grade'], isView: 'all', isLabel: true },
]

/** 메시지 */
const MESSAGE_MENU = [
  { id: 'IAD-81000', title: '메시지 발신 관리', path: ['/message/sendSetting'], isView: 'all' },
  { id: 'IAD-82000', title: '발신 기본설정', path: ['/message/defaultSetting'], isView: 'all' },
  { id: 'IAD-83000', title: '자동발신 설정', path: ['/message/autoSendSetting'], isView: 'all' },
]

/** 콘텐츠 */
const CONTENTS_MENU = [
  { id: 'BAD-065', title: '공지사항 관리', path: ['/contents/notice'], isView: 'all' },
  { id: 'IAD-92000', title: '입력폼 관리', path: ['/contents/form'], isView: 'all' },
  {
    id: 'BAD-081',
    title: '팝업/배너 관리',
    path: ['/contents/popup', '/contents/popup/[id]', '/contents/popup/add'],
    isView: 'all',
  },
]

export const OPERATE_SUB = {
  DASH_BOARD: DASH_BOARD,
  PRODUCT_MENU: PRODUCT_MENU,
  ORDER_MENU: ORDER_MENU,
  BENEFIT_MENU: BENEFIT_MENU,
  REVIEW_MENU: REVIEW_MENU,
  LINK_MENU: LINK_MENU,
  QUESTIONS_MENU: QUESTIONS_MENU,
  MEMBER_MENU: MEMBER_MENU,
  MESSAGE_MENU: MESSAGE_MENU,
  CONTENTS_MENU: CONTENTS_MENU,
}
