export type Project = {
  title: string
  subtitle?: string
  summary: string
  image?: string
  bullets: string[]
  demo?: string
  repo?: string
  color: string
}

export const projects: Project[] = [
  {
    title: 'CINESPOT PRO',
    subtitle: '電影探索平台',
    summary: '串接 TMDB API 的電影探索平台,提供現正上映、熱門、高分電影瀏覽與即時搜尋,內建電影詳情與預告片播放。',
    bullets: [
      '獨立開發並部署 TMDB 電影探索平台,提供現正上映、熱門、高分電影瀏覽與即時片名搜尋,資料依上映日期排序',
      '實作電影詳情 Modal,整合演職員名單、官方預告片(YouTube embed)與 IMDb / TMDB 外部連結,支援 ESC 關閉與背景滾動鎖定',
      '效能優化:移除 JS 平滑滾動回歸原生滾動、以 IntersectionObserver 實作 ScrollSpy、卡片 hover 改為純 CSS 消除 re-render、Hero 圖片降載至 w1280,CSS bundle 由 74KB 降至 40KB',
      '以環境變數管理 TMDB API key 並設計 fallback 資料層,API 異常時維持基本可用性',
    ],
    demo: 'https://cinespotpro.vercel.app/',
    image: 'cinespotpro.png',
    color: '#221a1e',
  },
  {
    title: 'AI 即時翻譯',
    subtitle: '多語言 AI 翻譯工具',
    summary: '支援 80 種語言的即時翻譯網站,透過 SSE 串流逐字輸出譯文,中英雙語介面即時切換。',
    bullets: [
      '獨立負責需求、UI 設計、前後端開發到部署,網站已交付並正式上線',
      '以 Vercel Serverless Function 串接 Groq LLM(SSE 串流回應),實作逐字輸出的即時翻譯體驗,API 金鑰僅存於伺服器端不外洩',
      '自建輕量 i18n 架構:以 useSyncExternalStore 實作外部狀態儲存,支援中/英即時切換、跨分頁同步與 localStorage 持久化',
      '不依賴 UI 套件,手刻可搜尋語言下拉選單(80 語言)、Portal 側滑歷史抽屜(含開關動畫)、語言交換與複製功能',
      '部署期間定位並排除雲端機房 IP 遭上游 API 風控封鎖的問題,調整 Serverless Region 恢復服務',
    ],
    demo: 'https://translatepro.vercel.app/',
    image: 'translatepro.png',
    color: '#1c2b4a',
  },
  {
    title: 'Resumate Partner',
    subtitle: '免註冊履歷編輯器',
    summary: '資料只存在你的瀏覽器,不用註冊、不用上傳個資,斷網也能編輯並下載可再編輯的 .docx 履歷。',
    bullets: [
      '獨立開發並上線免註冊履歷編輯器,資料僅存於瀏覽器 localStorage,解決傳統平台要求上傳個資的隱私問題',
      '於瀏覽器端產生原生 .docx(docx.js),輸出檔可繼續編輯,並支援繁中/英文雙語介面與履歷輸出',
      '自建 Service Worker 離線架構,達成斷網下完整編輯與下載',
      '完整 SEO 基建(動態 sitemap、metadata、JSON-LD),並以 Remotion 製作 React 宣傳影片嵌入首頁',
    ],
    demo: 'https://resumate-partner.vercel.app/',
    image: 'resumate.png',
    color: '#1f2d3d',
  },
  {
    title: 'DJKridP 官方網站',
    subtitle: '已由 DJ 本人正式使用',
    summary: '從需求、UI 設計到前後端與部署一手包辦的 DJ 官方網站,內建 AI 聊天助理與直播、音樂整合。',
    bullets: [
      '獨立負責需求、UI 設計、前後端開發到部署,網站已交付並正式上線',
      '以 CSS 變數建立統一設計系統,桌面端採 Floating Pill Navbar,行動端採底部 Dock,各尺寸皆可正常顯示',
      '以 Vercel Serverless Function 串接 Groq LLM(SSE 串流回應),實作可回答訪客問題的 AI 聊天助理',
      '整合 Twitch 直播狀態偵測、Spotify 播放清單與多個社群連結,並接入 Vercel Analytics 追蹤流量',
    ],
    demo: 'https://djkridp.vercel.app/',
    image: 'djkridp.png',
    color: '#3a3016',
  },
]
