<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Props {
  name:
    | "settings"
    | "notifications"
    | "search"
    | "close"
    | "sort"
    | "hamburger-menu"
    | "user";
}

const props = defineProps<Props>();

const iconComponent = ref(null);

onMounted(async () => {
  try {
    const module = await import(`@/assets/icons/${props.name}.svg`);
    iconComponent.value = module.default;
  } catch (error) {
    console.error(`Failed to load icon: ${props.name}`, error);
  }
});
</script>

<template>
  <component :is="iconComponent" v-if="iconComponent" class="icon" />
</template>

<style scoped>
.icon {
  display: inline-block;
  vertical-align: middle;
}

.icon :deep(path) {
  transition: all var(--transition);
}
</style>
