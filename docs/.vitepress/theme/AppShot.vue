<script setup lang="ts">
import { withBase } from 'vitepress'
</script>

<template>
  <figure class="app-shot">
    <div class="frame">
      <img class="dark-only" :src="withBase('/app-dark.webp')" width="2880" height="1800"
        alt="The Allnstack inbox: chats from every account in one list, a conversation with a fan, and the fan's tags and notes." />
      <img class="light-only" :src="withBase('/app-light.webp')" width="2880" height="1800"
        alt="The Allnstack inbox in the light theme." />
    </div>
    <figcaption>The inbox: every account in one list, longest-waiting fan on top.</figcaption>
  </figure>
</template>

<style scoped>
.app-shot {
  max-width: 1152px;
  margin: 8px auto 0;
  padding: 0 24px 24px;
}
.frame {
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--as-line-strong);
  background: var(--as-panel);
  box-shadow: 0 40px 80px -40px rgba(0, 0, 0, .6);
  animation: appear 900ms 900ms cubic-bezier(.2, .8, .2, 1) both;
}
img { display: block; width: 100%; height: auto; }
.light-only { display: none; }
:root:not(.dark) .dark-only { display: none; }
:root:not(.dark) .light-only { display: block; }
:root:not(.dark) .frame { box-shadow: 0 40px 80px -48px rgba(27, 28, 32, .35); }

figcaption {
  margin-top: 14px;
  color: var(--vp-c-text-2);
  font-size: 14px;
  text-align: center;
}

@keyframes appear { from { opacity: 0; transform: translateY(16px); } }

@media (prefers-reduced-motion: reduce) {
  .frame { animation: none; }
}
@media (max-width: 640px) {
  .app-shot { padding: 0 16px 16px; }
  .frame { border-radius: 10px; }
}
</style>
