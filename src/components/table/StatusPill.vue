<script setup lang="ts">
import type { Product } from "@/types/product";

interface Props {
  status: Product["status"];
}

defineProps<Props>();

const statusLabels: Record<Product["status"], string> = {
  active: "Active",
  pending: "Pending",
  inactive: "Inactive",
} as const;
</script>

<template>
  <span
    class="status-pill d-inline-flex align-center"
    :class="`status-pill--${status}`"
    role="status"
  >
    <span class="status-pill__dot" aria-hidden="true"></span>
    {{ statusLabels[status] }}
  </span>
</template>

<style lang="scss" scoped>
.status-pill {
  padding: var(--space-1) var(--space-2);
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  gap: var(--space-1);

  &__dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }

  &--active {
    background-color: var(--color-status-active);
    color: var(--color-status-active-text);

    .status-pill__dot {
      background-color: var(--color-status-active-text);
    }
  }

  &--pending {
    background-color: var(--color-status-pending);
    color: var(--color-status-pending-text);

    .status-pill__dot {
      background-color: var(--color-status-pending-text);
    }
  }

  &--inactive {
    background-color: var(--color-status-inactive);
    color: var(--color-status-inactive-text);

    .status-pill__dot {
      background-color: var(--color-status-inactive-text);
    }
  }
}
</style>
