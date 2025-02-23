<script setup lang="ts">
import Icon from "@/components/ui/Icon.vue";

interface Props {
  variant?: "primary" | "secondary" | "icon";
  block?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  customClass?: string;
  icon?: string;
}

withDefaults(defineProps<Props>(), {
  variant: "primary",
  block: false,
  type: "button",
  disabled: false,
  customClass: "",
  icon: "",
});
</script>

<template>
  <button
    class="button d-inline-flex align-center justify-center font-sm font-medium rounded px-6"
    :class="[`button--${variant}`, { 'w-100': block }, customClass]"
    :type="type"
    :disabled="disabled"
    :aria-disabled="disabled"
    v-bind="$attrs"
  >
    <slot name="icon">
      <Icon v-if="icon" :name="icon" class="button__icon" aria-hidden="true" />
    </slot>
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  height: 40px;
  cursor: pointer;
  transition: var(--transition);
  outline: none;

  &--primary {
    background-color: var(--color-primary);
    color: var(--color-white);
    border: none;

    &:hover:not(:disabled) {
      background-color: var(--color-primary-hover);
    }
  }

  &--secondary {
    background-color: var(--color-secondary);
    color: var(--color-text-primary);
    border: none;

    &:hover:not(:disabled) {
      background-color: var(--color-secondary-hover);
      color: var(--color-text-primary);
    }
  }

  &--icon {
    background-color: transparent;
    border: none;

    &:hover:not(:disabled) {
      background-color: var(--color-secondary-hover);
    }
  }

  &__icon {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    padding: 0;
  }

  &:disabled {
    background-color: var(--color-disabled);
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus-visible {
    box-shadow:
      0 0 0 2px #fff,
      0 0 0 4px currentColor;
  }
}
</style>
