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
    class="button d-inline-flex align-center justify-center font-sm font-medium rounded px-6"
    :class="[`button--${variant}`, { 'w-100': block }]"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  height: 40px;
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
    color: var(--color-text-primary);
    border: none;

    &:hover {
      background-color: var(--color-secondary-hover);
      color: var(--color-text-primary);
    }
  }
}
</style>
