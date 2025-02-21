<script setup lang="ts">
import type { Product } from "@/types/product";
import StatusPill from "@/components/table/StatusPill.vue";
import { formatPrice, getStatusFromQuantity } from "@/utils/helpers";
import noImagePlaceholder from "@/assets/images/no-image-placeholder.jpg";

interface Props {
  product: Product;
}

defineProps<Props>();
</script>

<template>
  <div class="product-details">
    <img
      :src="product.image || noImagePlaceholder"
      :alt="product.product"
      class="product-details__image rounded"
      width="200"
      height="150"
    />

    <div class="product-details__content p-4">
      <div class="d-flex flex-column gap-2">
        <h3 class="font-lg text-primary">{{ product.product }}</h3>
        <div class="d-flex align-center gap-3">
          <StatusPill :status="getStatusFromQuantity(product.quantity)" />
          <p class="font-xl font-medium mb-0">
            {{ formatPrice(product.total) }}
          </p>
        </div>
      </div>

      <dl class="details-list mt-4">
        <div class="details-list__item">
          <dt class="font-sm text-secondary">Product ID</dt>
          <dd class="font-base text-primary">{{ product.id }}</dd>
        </div>

        <div class="details-list__item">
          <dt class="font-sm text-secondary">Serial Number</dt>
          <dd class="font-base text-primary">{{ product.serial }}</dd>
        </div>

        <div class="details-list__item">
          <dt class="font-sm text-secondary">Quantity</dt>
          <dd class="font-base text-primary">{{ product.quantity }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-details {
  &__image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    background-color: var(--color-gray-light);
  }

  @media (min-width: 768px) {
    &__image {
      width: 200px;
      height: 150px;
    }

    &__content {
      display: flex;
      gap: var(--space-4);
    }
  }
}

.details-list {
  display: grid;
  gap: var(--space-4);

  &__item {
    dt {
      margin-bottom: var(--space-1);
    }

    dd {
      margin: 0;
    }
  }
}
</style>
