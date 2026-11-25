import { defineConfig } from 'vitepress'

const RELEASES = 'https://github.com/oserusapp-cyber/allnstack-releases/releases/latest'
const DESCRIPTION =
  'Desktop workspace for agencies that manage creators’ chats: one inbox for every model and platform, team roles, shifts, a media vault and AI-assisted replies.'

export default defineConfig({
  title: 'Allnstack',
  description: DESCRIPTION,
  lang: 'en-US',
  // Served from oserusapp-cyber.github.io/allnstack-releases/; set to '/' with a custom domain.
  base: '/allnstack-releases/',
  cleanUrls: true,
  appearance: 'dark',
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/allnstack-releases/favicon.ico', sizes: '48x48' }],
    ['link', { rel: 'icon', href: '/allnstack-releases/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'apple-touch-icon', href: '/allnstack-releases/apple-touch-icon.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400..800&display=swap' }],
    ['meta', { name: 'theme-color', content: '#131417' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Allnstack | The agency chat workspace' }],
    ['meta', { property: 'og:description', content: DESCRIPTION }],
    ['meta', { property: 'og:image', content: 'https://oserusapp-cyber.github.io/allnstack-releases/og.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Features', link: '/features' },
      { text: 'FAQ', link: '/faq' },
      { text: 'Download', link: RELEASES },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'System Requirements', link: '/getting-started#system-requirements' },
          { text: 'Download', link: '/getting-started#download' },
          { text: 'Installation', link: '/getting-started#installation' },
          { text: 'Connect to Your Server', link: '/getting-started#connect-to-your-server' },
          { text: 'First Steps for Owners', link: '/getting-started#first-steps-for-owners' },
          { text: 'Updates', link: '/getting-started#updates' },
        ],
      },
      {
        text: 'Features',
        items: [
          { text: 'How It Fits Together', link: '/features#how-it-fits-together' },
          { text: 'Inbox and Chatting', link: '/features#inbox-and-chatting' },
          { text: 'Models and Accounts', link: '/features#models-and-accounts' },
          { text: 'Team, Roles and Shifts', link: '/features#team-roles-and-shifts' },
          { text: 'Vault', link: '/features#vault' },
          { text: 'Plan', link: '/features#plan' },
          { text: 'Reports and Records', link: '/features#reports-and-records' },
          { text: 'Safety and Privacy', link: '/features#safety-and-privacy' },
          { text: 'Platforms', link: '/features#platforms' },
        ],
      },
      {
        text: 'Resources',
        items: [{ text: 'FAQ', link: '/faq' }],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/oserusapp-cyber/allnstack-releases' }],

    footer: {
      message: 'Installers and updates are published on <a href="https://github.com/oserusapp-cyber/allnstack-releases/releases">GitHub Releases</a>.',
      copyright: '© 2026 Allnstack',
    },

    search: {
      provider: 'local',
    },
  },
})
