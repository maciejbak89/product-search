<script setup lang="ts">
import { defineProps, defineEmits, onMounted, onUnmounted } from "vue";
import Button from "@/components/ui/Button.vue";
import Icon from "@/components/ui/Icon.vue";

interface Props {
  modelValue: boolean;
  title: string;
  isPrimary?: boolean;
  primaryText?: string;
  isSecondary?: boolean;
  secondaryText?: string;
}

withDefaults(defineProps<Props>(), {
  isPrimary: true,
  secondaryText: "Cancel",
  isSecondary: true,
  primaryText: "Confirm",
});

const emit = defineEmits<{
  (e: "close"): void;
  (e: "confirm"): void;
  (e: "update:modelValue", value: boolean): void;
}>();

const handleClose = () => {
  emit("update:modelValue", false);
  emit("close");
};

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    handleClose();
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleEscape);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleEscape);
});
</script>

<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      class="dialog-overlay d-flex justify-center align-center"
      @click="handleClose"
    >
      <div role="dialog" aria-modal="true" class="dialog" @click.stop>
        <header class="dialog__header d-flex justify-between align-start mb-4">
          <h2 class="font-xl font-bold pt-2">{{ title }}</h2>
          <Button
            variant="icon"
            class="dialog__close"
            aria-label="Close dialog"
            @click="handleClose"
          >
            <template #icon>
              <Icon name="close" aria-hidden="true" />
            </template>
          </Button>
        </header>

        <div class="dialog__content mb-4">
          <slot></slot>
        </div>

        <footer class="dialog__actions d-flex justify-end">
          <Button
            v-if="isSecondary"
            variant="secondary"
            class="dialog__action-button"
            @click="handleClose"
          >
            {{ secondaryText }}
          </Button>
          <Button
            v-if="isPrimary"
            variant="primary"
            class="dialog__action-button"
            @click="$emit('confirm')"
          >
            {{ primaryText }}
          </Button>
        </footer>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 50;
}

.dialog {
  padding: 40px;
  background-color: var(--color-white);
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 8px;

  @media (max-width: 768px) {
    height: 100vh;
    max-height: 100vh;
    width: 100%;
    max-width: 100%;
    padding: 20px 16px;
    border-radius: 0;
  }

  &__header {
    gap: 16px;
  }

  &__close {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    padding: 0;
  }

  &__actions {
    gap: 16px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 8px;
    }
  }

  &__action-button {
    @media (max-width: 768px) {
      width: 100%;
    }
  }
}
</style>
