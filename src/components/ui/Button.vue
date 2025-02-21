<script setup lang="ts">
interface Props {
  variant?: "primary" | "secondary";
  block?: boolean;
  type?: "button" | "submit";
}

withDefaults(defineProps<Props>(), {
  variant: "primary",
  block: false,
  type: "button",
});
</script>

<template>
  <button
    :type="type"
    class="button d-inline-flex align-center justify-center font-sm font-medium rounded"
    :class="[`button--${variant}`, { 'w-100': block }]"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  height: 40px;
  padding: 0 var(--space-4);
  transition: var(--transition);
  cursor: pointer;

  &--primary {
    background-color: var(--color-primary);
    color: var(--color-white);
    border: none;

    &:hover {
      background-color: var(--color-primary-hover);
    }
  }

  &--secondary {
    background-color: transparent;
    border: 1px solid var(--color-border);
    color: var(--color-text-primary);

    &:hover {
      background-color: var(--color-gray-light);
    }
  }
}
</style>
