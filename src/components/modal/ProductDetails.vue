<script setup lang="ts">
import type { Product } from "@/types/product";
import noImagePlaceholder from "@/assets/images/no-image-placeholder.png";

interface Props {
  product: Product;
}

defineProps<Props>();
</script>

<template>
  <div class="product-details d-flex">
    <img
      :src="product?.image || noImagePlaceholder"
      :alt="
        product.product ? `Image of ${product.product}` : 'No image available'
      "
      aria-label="Product image"
      class="product-details__image"
      loading="lazy"
      @error="($event.target as HTMLImageElement).src = noImagePlaceholder"
    />

    <div class="product-details__description text-primary">
      <h3 class="font-xs mb-2">Key Features:</h3>
      <ul class="font-xs pl-4 mb-4">
        <li
          v-for="(feature, index) in product?.description.features"
          :key="index"
        >
          {{ feature }}
        </li>
      </ul>
      <p class="font-xs">
        {{ product?.description.description }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-details {
  display: flex;
  gap: var(--space-4);

  &__image {
    width: 252px;
    height: auto;
    object-fit: contain;
    transition: opacity var(--transition);
  }

  &__description {
    width: 252px;

    h3 {
      line-height: 24px;
    }

    ul {
      list-style-type: disc;

      li {
        line-height: 24px;
      }
    }

    p {
      line-height: 24px;
    }
  }
}

@media (max-width: 768px) {
  .product-details {
    flex-direction: column;
    gap: var(--space-6);

    &__image {
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
    }

    &__description {
      width: 100%;
    }
  }
}
</style>
