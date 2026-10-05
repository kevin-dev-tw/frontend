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
      '獨立開發並上線 Resumate Partner 履歷編輯器,從需求、UI 設計、前後端到部署一手包辦',
      '設計並交付 DJKridP 官方網站,已由 DJ 本人正式使用,包含 AI 聊天助理與多項 API 整合',
      '獨立開發 AI 即時翻譯網站,串接 Groq LLM 實作 SSE 串流翻譯,並自建輕量 i18n 架構',
    ],
  },
  {
    period: '2026 年 8 月 – 9 月',
    company: '新加坡商蝦皮數位電商服務有限公司台灣分公司',
    role: '文字客服',
    location: '台北市信義區',
    bullets: [
      '每日處理約 20 則買家諮詢,涵蓋商品、訂單、售後等問題,依問題類型判斷處理優先順序,並在時效內完成回覆',
      '擔任買家與廠商的溝通窗口,將買家模糊的描述整理成明確問題轉達廠商,並追蹤進度直到結案,確保資訊正確傳達',
      '處理客訴與情緒問題,先釐清原因再提出解決方案,維持賣場評價',
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
