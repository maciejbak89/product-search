<script setup lang="ts">
import type { Product } from "@/types/product";

interface Props {
  status: Product["status"];
}

const statusLabels: Record<Props["status"], string> = {
  high: "High",
  medium: "Medium",
  low: "Low",
  unavailable: "Unavailable",
};

defineProps<Props>();
</script>

<template>
  <span
    class="status-pill font-xs d-inline-flex justify-center align-center"
    :class="`status-pill--${status}`"
    role="status"
  >
    {{ statusLabels[status] }}
  </span>
</template>

<style lang="scss" scoped>
.status-pill {
  padding: var(--space-1) var(--space-2);
  border-radius: 16px;
  gap: var(--space-1);
  min-width: 84px;

  &--high {
    background-color: var(--color-status-high);
    color: var(--color-status-high-text);
  }

  &--medium {
    background-color: var(--color-status-medium);
    color: var(--color-status-medium-text);
  }

  &--low {
    background-color: var(--color-status-low);
    color: var(--color-status-low-text);
  }

  &--unavailable {
    background-color: var(--color-status-unavailable);
    color: var(--color-status-unavailable-text);
  }
}
</style>
