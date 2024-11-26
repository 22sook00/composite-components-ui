import { OPERATE_SUB } from './operateMenu'
import { SETTING_SUB } from './settingMenu'

/** node 환경별 서브 메뉴 필터 */
const filterSubMenu = menus => {
  const envNode = process.env.NEXT_PUBLIC_NODE_ENV

  if (envNode === 'production') {
    return menus.filter(menu => menu.isView === 'all')
  }

  return menus
}

/** 운영관리 */
export const STORE_OPERATE = [
  { id: 'IAD-00000', title: '홈', sub: [], path: ['/dashboard'] },
  {
    id: 'IAD-10000',
    title: '상품',
    sub: filterSubMenu(OPERATE_SUB.PRODUCT_MENU),
    path: ['/product/add', '/product/list', '/product/template', '/product/category', '/product/[id]'],
  },
  {
    id: 'IAD-20000',
    title: '판매',
    sub: filterSubMenu(OPERATE_SUB.ORDER_MENU),
    path: ['/order/list', '/order/cancel', '/order/refund', '/order/exchange', '/order/adjustment'],
  },
  {
    id: 'IAD-30000',
    title: '쇼핑 연동',
    sub: filterSubMenu(OPERATE_SUB.LINK_MENU),
    path: [
      '/link/naverShopping',
      '/link/kakaoShopping',
      '/link/zigzagShopping',
      '/link/youtubeShopping',
      '/link/facebookShopping',
    ],
  },
  {
    id: 'IAD-40000',
    title: '혜택',
    sub: filterSubMenu(OPERATE_SUB.BENEFIT_MENU),
    path: ['/benefit/coupon', '/benefit/coupon/add', '/benefit/point', '/benefit/point/config'],
  },
  {
    id: 'IAD-50000',
    title: '리뷰',
    sub: filterSubMenu(OPERATE_SUB.REVIEW_MENU),
    path: ['/reviews'],
  },

  {
    id: 'IAD-60000',
    title: '문의',
    sub: filterSubMenu(OPERATE_SUB.QUESTIONS_MENU),
    path: ['/questions/product', '/questions/inquiry'],
  },

  {
    id: 'IAD-70000',
    title: '회원',
    sub: filterSubMenu(OPERATE_SUB.MEMBER_MENU),
    path: ['/member/info', '/member/add', '/member/info/[id]', '/member/group', '/member/grade'],
  },
  {
    id: 'IAD-80000',
    title: '메시지',
    sub: filterSubMenu(OPERATE_SUB.MESSAGE_MENU),
    path: ['/message/sendSetting', '/message/defaultSetting', '/message/autoSendSetting'],
  },

  {
    id: 'IAD-90000',
    title: '콘텐츠',
    sub: filterSubMenu(OPERATE_SUB.CONTENTS_MENU),
    path: ['/contents/notice', '/contents/form', '/contents/popup', '/contents/popup/[id]', '/contents/popup/add'],
  },
]

/** 상점설정 */
export const STORE_SETTING = [
  {
    id: 'IAD-C0000',
    title: '기본정보',
    sub: filterSubMenu(SETTING_SUB.SETTING_DEFAULT_MENU),
    path: ['/setting/default/site', '/setting/default/admin', '/setting/default/address'],
  },
  {
    id: 'IAD-D0000',
    title: '회원가입',
    sub: filterSubMenu(SETTING_SUB.SETTING_MEMBER_MENU),
    path: ['/setting/member/join', '/setting/member/terms', '/setting/member/social', '/setting/member/identity'],
  },
  {
    id: 'IAD-E0000',
    title: '운영환경',
    sub: filterSubMenu(SETTING_SUB.SETTING_MANAGE_MENU),
    path: ['/setting/manage/channel', '/setting/manage/domain', '/setting/manage/seo'],
  },

  {
    id: 'IAD-F0000',
    title: '쇼핑환경',
    sub: filterSubMenu(SETTING_SUB.SETTING_SHOPPING_MENU),
    path: ['/setting/shopping/order'],
  },
  {
    id: 'IAD-G0000',
    title: '결제수단',
    sub: filterSubMenu(SETTING_SUB.SETTING_PAYMENT_MENU),
    path: ['/setting/payment/bankTransfer', '/setting/payment/pg', '/setting/payment/mobile'],
  },
]

/** 성장센터 */
export const STORE_PARTNER = [
  { id: 'IAD-I1000', title: '네이버', sub: [], path: ['/partner/naver'] },
  { id: 'IAD-I2000', title: '구글', sub: [], path: ['/partner/google'] },
  { id: 'IAD-I3000', title: '메타', sub: [], path: ['/partner/meta'] },
  { id: 'IAD-I4000', title: '카카오', sub: [], path: ['/partner/kakao'] },
]
