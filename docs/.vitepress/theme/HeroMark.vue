<script setup lang="ts">
// The mark builds itself once on load: the two feet, then the crossbar, then the top.
// It is the app's logo: an "A" made of stacked chats, the newest one on top.
</script>

<template>
  <div class="hero-mark" aria-hidden="true">
    <svg viewBox="0 0 64 64">
      <rect class="tile" x="1" y="1" width="62" height="62" rx="15" />
      <rect class="bar foot l" x="10" y="42" width="18" height="10" rx="5" />
      <rect class="bar foot r" x="36" y="42" width="18" height="10" rx="5" />
      <rect class="bar cross" x="17" y="27" width="30" height="10" rx="5" />
      <rect class="bar top" x="24" y="12" width="16" height="10" rx="5" />
    </svg>
  </div>
</template>

<style scoped>
.hero-mark {
  width: min(320px, 70vw);
  aspect-ratio: 1;
  margin: 0 auto;
}
svg { width: 100%; height: 100%; display: block; overflow: visible; }

.tile { fill: var(--as-panel); stroke: var(--as-line-strong); stroke-width: 0.75; }
.foot { fill: #7890b5; }
.cross { fill: #a9bcd9; }
.top { fill: #e3eaf5; }

.bar { transform-box: fill-box; transform-origin: center; animation: settle 700ms cubic-bezier(.2, .8, .2, 1) both; }
.foot.l { animation-name: rise; animation-delay: 150ms; }
.foot.r { animation-name: rise; animation-delay: 230ms; }
.cross { animation-name: slide; animation-delay: 420ms; }
.top { animation-name: drop; animation-delay: 650ms; }

@keyframes rise { from { opacity: 0; transform: translateY(14px); } }
@keyframes slide { from { opacity: 0; transform: translateX(-12px) scaleX(.6); } }
@keyframes drop { from { opacity: 0; transform: translateY(-16px); } 70% { transform: translateY(1.5px); } }

:root:not(.dark) .tile { fill: #1f2126; stroke: #34373e; }

@media (prefers-reduced-motion: reduce) {
  .bar { animation: none; }
}
</style>
