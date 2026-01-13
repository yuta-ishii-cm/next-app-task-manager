import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Next.js入門ドキュメント",
  description: "Next.js入門のための演習教材",
  base: '/next-app-task-manager/',
  lang: 'ja-JP',
  ignoreDeadLinks: [
    /localhost/  // 教材内のlocalhostリンクはチェック対象外
  ],
  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/' },
      { text: 'はじめに', link: '/phase1' }
    ],

    sidebar: [
      {
        text: '演習',
        items: [
          { text: 'Phase 1: 基礎編', link: '/phase1' },
          { text: 'Phase 2: UI構築編', link: '/phase2' },
          { text: 'Phase 3: データ操作編', link: '/phase3' },
          { text: 'Phase 4: 完成編', link: '/phase4' },
          { text: '発展課題集', link: '/optional' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/your-repo' }
    ]
  }
})
