<template>
  <div class="top-button" :class="{ hide: isHide }" @click="toTop">
    <span class="top-button__icon icon material-icons-outlined"
      >arrow_upward</span
    >
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isHide = ref(true);
const toTop = () => window.scrollTo(0, 0);

window.addEventListener(
  'scroll',
  () => {
    if (window.scrollY > 0) {
      isHide.value = false;
    } else {
      isHide.value = true;
    }
  },
  { passive: true },
);
</script>

<style lang="scss" scoped>
.top-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  padding: 12px;
  border-radius: 50%;
  background-color: var(--top-button-background-color);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  user-select: none;
  cursor: pointer;

  &__icon {
    color: var(--text-color);
  }

  &.hide {
    display: none;
  }
}
</style>
