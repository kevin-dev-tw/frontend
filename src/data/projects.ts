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
    title: 'Relay',
    subtitle: 'the queue that resolves itself',
    summary: '獨立設計、開發並部署的虛構 AI 客服解決引擎形象網站，整頁構築為一座單色琥珀大廳，以滾動演繹「工單走向解決之光」的概念。',
    bullets: [
      '獨立設計、開發並部署 Relay — 虛構 AI 客服解決引擎的形象網站，整頁構築為一座單色琥珀大廳，以滾動演繹「工單走向解決之光」的概念',
      '以 GSAP 3.15 實作全站動態：ScrollSmoother 驅動 1.4s 慣性滾動與 data-speed 視差、ScrollTrigger scrub 控制太陽隨滾動放大（1→2.7×）、pin 式「一張工單的旅程」於 240% 滾動段中完成原文 → 解析 → 解決三態切換與距離倒數',
      '自訂設計系統：Anton / Archivo Variable / IBM Plex Mono 自架字體、單色琥珀 token 色彩、剪影 multiply 游標（深色表面自動反轉為日光色）、站牌式導覽（桌面導覽列 / 行動版全螢幕五站選單）',
      '響應式與無障礙：860px 斷點下太陽收為牆上半圓、遙測欄隱藏、micro 字距縮窄防溢出；完整支援 prefers-reduced-motion（關閉 Smoother、停用霧氣與顆粒動畫、reveal 即現）；設計偵測器掃描零反模式（修復對比、11px 字級下限、nav 選擇器權重 bug）',
      '工程面：Vite 建置、自架字體免 CDN、Puppeteer 無頭截圖做滾動驗證、vercel.json SPA 部署設定、OG/Twitter 分享卡與 SVG favicon',
    ],
    demo: 'https://relay-showcase.vercel.app/',
    image: 'relay.png',
    color: '#f2d78e',
  },
  {
    title: 'CINESPOT PRO',
    subtitle: '電影探索平台',
    summary: '串接 TMDB API 的電影探索平台，提供現正上映、熱門、高分電影瀏覽與即時搜尋，內建電影詳情與預告片播放。',
    bullets: [
      '獨立開發並部署 TMDB 電影探索平台，提供現正上映、熱門、高分電影瀏覽與即時片名搜尋，資料依上映日期排序',
      '實作電影詳情 Modal，整合演職員名單、官方預告片（YouTube embed）與 IMDb / TMDB 外部連結，支援 ESC 關閉與背景滾動鎖定',
      '效能優化：移除 JS 平滑滾動回歸原生滾動、以 IntersectionObserver 實作 ScrollSpy、卡片 hover 改為純 CSS 消除 re-render、Hero 圖片降載至 w1280，CSS bundle 由 74KB 降至 40KB',
      '以環境變數管理 TMDB API key 並設計 fallback 資料層，API 異常時維持基本可用性',
    ],
    demo: 'https://cinespotpro.vercel.app/',
    image: 'cinespotpro.png',
    color: '#e6d5d3',
  },
  {
    title: 'Resumate Partner',
    subtitle: '免註冊履歷編輯器',
    summary: '資料只存在你的瀏覽器，不用註冊、不用上傳個資，斷網也能編輯並下載可再編輯的 .docx 履歷。',
    bullets: [
      '獨立開發並上線免註冊履歷編輯器，資料僅存於瀏覽器 localStorage，解決傳統平台要求上傳個資的隱私問題',
      '於瀏覽器端產生原生 .docx（docx.js），輸出檔可繼續編輯，並支援繁中/英文雙語介面與履歷輸出',
      '自建 Service Worker 離線架構，達成斷網下完整編輯與下載',
      '完整 SEO 基建（動態 sitemap、metadata、JSON-LD），並以 Remotion 製作 React 宣傳影片嵌入首頁',
    ],
    demo: 'https://resumate-partner.vercel.app/',
    image: 'resumate.png',
    color: '#efdfcf',
  },
  {
    title: 'DJKridP 官方網站',
    subtitle: '已由 DJ 本人正式使用',
    summary: '從需求、UI 設計到前後端與部署一手包辦的 DJ 官方網站，內建 AI 聊天助理與直播、音樂整合。',
    bullets: [
      '獨立負責需求、UI 設計、前後端開發到部署，網站已交付並正式上線',
      '以 CSS 變數建立統一設計系統，桌面端採 Floating Pill Navbar，行動端採底部 Dock，各尺寸皆可正常顯示',
      '以 Vercel Serverless Function 串接 Groq LLM（SSE 串流回應），實作可回答訪客問題的 AI 聊天助理',
      '整合 Twitch 直播狀態偵測、Spotify 播放清單與多個社群連結，並接入 Vercel Analytics 追蹤流量',
    ],
    demo: 'https://djkridp.vercel.app/',
    image: 'djkridp.png',
    color: '#e8dcb8',
  },
]
