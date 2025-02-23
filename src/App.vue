<script setup lang="ts">
import Navigation from "@/components/navigation/Navigation.vue";
</script>

<template>
  <div class="app-wrapper">
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
