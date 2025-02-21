<!-- <script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores/products";
import ProductDetails from "./ProductDetails.vue";
import Icon from "@/components/ui/Icon.vue";

const store = useProductStore();
const { selectedProduct } = storeToRefs(store);
const { clearSelectedProduct } = store;

function handleEscape(event: KeyboardEvent) {
  if (event.key === "Escape") {
    clearSelectedProduct();
  }
}

onMounted(() => {
  document.addEventListener("keydown", handleEscape);
  document.body.style.overflow = "hidden";
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleEscape);
  document.body.style.overflow = "";
});
</script>

<template>
  <div
    class="modal-overlay"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    @click="clearSelectedProduct"
  >
    <div class="modal" @click.stop>
      <div class="modal__header">
        <h2 id="modal-title" class="font-lg">Product Details</h2>
        <button
          class="modal__close"
          @click="clearSelectedProduct"
          aria-label="Close modal"
        >
          <Icon name="close" />
        </button>
      </div>

      <ProductDetails v-if="selectedProduct" :product="selectedProduct" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.modal {
  background: white;
  width: 600px;
  max-width: calc(100% - 32px);
  border-radius: 8px;
  max-height: calc(100vh - 32px);
  overflow: auto;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    border-bottom: 1px solid var(--color-border);
  }

  &__close {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    border-radius: 4px;
    cursor: pointer;
    color: var(--color-text-secondary);
    transition: all 0.2s;

    &:hover {
      background: var(--color-gray-light);
      color: var(--color-text-primary);
    }
  }
}
</style> -->

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores/products";
import ProductDetails from "./ProductDetails.vue";
import Icon from "@/components/ui/Icon.vue";

const store = useProductStore();
const { selectedProduct } = storeToRefs(store);
const { clearSelectedProduct } = store;

function handleEscape(event: KeyboardEvent) {
  if (event.key === "Escape") {
    clearSelectedProduct();
  }
}

onMounted(() => {
  document.addEventListener("keydown", handleEscape);
  document.body.style.overflow = "hidden";
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleEscape);
  document.body.style.overflow = "";
});
</script>

<template>
  <div
    class="modal-overlay"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    @click="clearSelectedProduct"
  >
    <div class="modal" @click.stop>
      <div class="modal__header">
        <h2 id="modal-title" class="font-lg">Product Details</h2>
        <button
          class="modal__close"
          @click="clearSelectedProduct"
          aria-label="Close modal"
        >
          <Icon name="close" />
        </button>
      </div>

      <ProductDetails v-if="selectedProduct" :product="selectedProduct" />

      <div class="modal__footer d-md-none">
        <button class="close-btn" @click="clearSelectedProduct">Close</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.modal {
  background: white;
  width: 600px;
  max-width: calc(100% - 32px);
  border-radius: 8px;
  max-height: calc(100vh - 32px);
  overflow: auto;

  @media (max-width: 768px) {
    height: 100vh;
    max-height: 100vh;
    width: 100%;
    max-width: 100%;
    border-radius: 0;
    display: flex;
    flex-direction: column;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    border-bottom: 1px solid var(--color-border);

    @media (max-width: 768px) {
      padding-right: 56px; // Space for close button
    }
  }

  &__close {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    border-radius: 4px;
    cursor: pointer;
    color: var(--color-text-secondary);
    transition: all 0.2s;

    @media (max-width: 768px) {
      position: absolute;
      top: 8px;
      right: 8px;
    }

    &:hover {
      background: var(--color-gray-light);
      color: var(--color-text-primary);
    }
  }

  &__footer {
    margin-top: auto;
    padding: 16px;
    border-top: 1px solid var(--color-border);
  }
}

.close-btn {
  width: 100%;
  height: 40px;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: var(--color-primary-hover);
  }
}
</style>
