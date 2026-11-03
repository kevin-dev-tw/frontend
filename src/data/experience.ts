export type Experience = {
  period: string
  company: string
  role: string
  location: string
  bullets: string[]
}

export const experience: Experience[] = [
  {
    period: '2025 – 至今',
    company: '獨立前端開發',
    role: '個人專案',
    location: '',
    bullets: [
      '獨立設計、開發並部署 Relay AI 客服解決引擎形象網站，以 GSAP ScrollSmoother / ScrollTrigger 實作全站滾動敘事動態',
      '獨立開發並上線 Resumate Partner 履歷編輯器，從需求、UI 設計、前後端到部署一手包辦',
      '設計並交付 DJKridP 官方網站，已由 DJ 本人正式使用，包含 AI 聊天助理與多項 API 整合',
      '獨立開發並部署 CINESPOT PRO 電影探索平台，串接 TMDB API，並完成效能優化（CSS bundle 74KB → 40KB）',
    ],
  },
  {
    period: '2026 年 8 月 – 9 月',
    company: '新加坡商蝦皮數位電商服務有限公司台灣分公司',
    role: '文字客服',
    location: '台北市信義區',
    bullets: [
      '每日處理約 20 則買家諮詢（商品、訂單、售後），建立「問題類型 × 時效」分級機制，優先處理出貨異常與客訴，平均首次回覆時間控制在 5 分鐘內',
      '擔任買家與廠商的溝通窗口，將模糊描述整理成「商品/訂單編號/問題現象/期望處理方式」標準格式，減少來回確認次數；建立案件追蹤清單，每日跟進直到結案',
      '將重複問題（尺寸、運送時間、規格）整理成常見問答/回覆範本，提升回覆一致性與效率',
    ],
  },
  {
    period: '2021 – 2025',
    company: '吳鳳科技大學',
    role: '數位科技與媒體設計系',
    location: '大學畢業',
    bullets: [],
  },
]
