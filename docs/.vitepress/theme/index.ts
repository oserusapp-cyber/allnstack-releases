import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import HeroMark from './HeroMark.vue'
import AppShot from './AppShot.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'home-hero-image': () => h(HeroMark),
      'home-hero-after': () => h(AppShot),
    }),
}
