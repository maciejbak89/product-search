<script setup lang="ts">
interface Props {
  name: "settings" | "notifications" | "search" | "close" | "sort";
}

defineProps<Props>();
</script>

<template>
  <span
    class="d-inline-flex align-center justify-center icon"
    :class="`icon--${name}`"
  >
    <!-- We can add SVG icons here based on the name prop -->
  </span>
</template>

<style lang="scss" scoped>
.icon {
  width: 20px;
  height: 20px;

  &--search {
    width: 16px;
    height: 16px;
  }
}
</style>
