<script setup lang="ts">
import { useProductStore } from "@/stores/products";
import type { Product } from "@/types/product";

const store = useProductStore();
const props = defineProps<{ product: Product }>();
const emit = defineEmits(["close"]);

const placeholderImage = "/no-image-placeholder.jpg";

const closeModal = () => {
  store.clearSelectedProduct();
  emit("close");
};
</script>

<template>
  <div
    class="modal"
    role="dialog"
    aria-label="Product details"
    aria-describedby="modal-description"
    @click.self="closeModal"
  >
    <div class="modal__content">
      <h2 id="modal-description" class="modal__title">{{ product.product }}</h2>
      <img
        :src="product.image || placeholderImage"
        :alt="
          product.product ? `Image of ${product.product}` : 'No image available'
        "
        class="modal__image"
        loading="lazy"
        aria-label="Product image"
        @error="($event.target as HTMLImageElement).src = placeholderImage"
      />
      <p class="modal__description">
        Serial: {{ product.serial }}<br />
        Quantity: {{ product.quantity }}<br />
        Price: ${{ product.total.toFixed(2) }}
      </p>
      <button
        class="modal__close"
        aria-label="Close product details"
        @click="closeModal"
      >
        Close
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// .modal {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;

//   &__content {
//     background-color: white;
//     padding: 20px;
//     border-radius: 8px;
//     width: 90%;
//     max-width: 500px;
//     position: relative;
//   }

//   &__title {
//     font-size: 24px;
//     margin-bottom: 15px;
//   }

//   &__image {
//     width: 100%;
//     height: auto;
//     max-height: 300px;
//     object-fit: contain;
//     margin-bottom: 15px;
//   }

//   &__description {
//     font-size: 16px;
//     line-height: 1.5;
//     margin-bottom: 20px;
//   }

//   &__close {
//     @extend .button;
//     @extend .button--secondary;
//     padding: 8px 16px;

//     &:focus {
//       outline: 2px solid $text-color;
//       outline-offset: 2px;
//     }
//   }

//   @media (max-width: 768px) {
//     &__content {
//       width: 85%;
//     }
//   }
// }

// .sr-only {
//   position: absolute;
//   width: 1px;
//   height: 1px;
//   padding: 0;
//   margin: -1px;
//   overflow: hidden;
//   clip: rect(0, 0, 0, 0);
//   border: 0;
// }
</style>

<!-- 
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  
    &__content {
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      width: 90%;
      max-width: 500px;
      position: relative;
    }
  
    &__title {
      font-size: 20px;
      margin-bottom: 16px;
    }
  
    &__image {
      width: 100%;
      height: auto;
      max-height: 300px;
      object-fit: contain;
      margin-bottom: 16px;
    }
  
    &__description {
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 16px;
    }
  
    &__close {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    @include mobile {
      &__content {
        width: 85%;
      }
    }
  }
   -->