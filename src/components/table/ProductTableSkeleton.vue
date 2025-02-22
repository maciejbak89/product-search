<script setup lang="ts">
interface Props {
  mobile?: boolean;
}

withDefaults(defineProps<Props>(), {
  mobile: false,
});
</script>

<template>
  <div v-if="mobile">
    <div
      v-for="n in 10"
      :key="`skeleton-mobile-${n}`"
      class="card d-flex flex-column justify-center px-4 border-bottom"
    >
      <div class="skeleton-item skeleton-item--name__mobile mb-1"></div>
      <div class="skeleton-item skeleton-item--serial__mobile"></div>
    </div>
  </div>

  <tr
    v-for="n in 10"
    v-else
    :key="`skeleton-${n}`"
    class="table-row border-bottom"
  >
    <td class="table-row__cell table-row__cell--center">
      <div class="skeleton-item skeleton-item--id"></div>
    </td>
    <td class="table-row__cell table-row__cell--center">
      <div class="skeleton-item skeleton-item--status"></div>
    </td>
    <td class="table-row__cell table-row__cell--center">
      <div class="skeleton-item skeleton-item--quantity"></div>
    </td>
    <td class="table-row__cell table-row__cell--left">
      <div class="skeleton-item skeleton-item--name mb-1"></div>
      <div class="skeleton-item skeleton-item--serial"></div>
    </td>
    <td class="table-row__cell table-row__cell--right border-left">
      <div class="skeleton-item skeleton-item--price"></div>
    </td>
  </tr>
</template>

<style lang="scss" scoped>
.card {
  height: 56px;

  &:last-child {
    border-bottom: none;
  }
}

.table-row {
  height: 56px;

  &__cell {
    padding-left: 16px;
    padding-right: 16px;

    &--left {
      text-align: left;
    }

    &--right {
      text-align: right;
      .skeleton-item {
        margin-left: auto;
      }
    }

    &--center {
      text-align: center;
      .skeleton-item {
        margin: 0 auto;
      }
    }
  }

  &:last-child {
    border-bottom: none;
  }
}

.skeleton-item {
  background: var(--color-skeleton);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    animation: loading 1.5s infinite;
  }

  &--id {
    width: 38px;
    height: 24px;
  }
  &--status {
    width: 84px;
    height: 26px;
    border-radius: 16px;
  }
  &--quantity {
    width: 40px;
    height: 24px;
  }
  &--name {
    width: 188px;
    height: 24px;

    &__mobile {
      width: 240px;
      height: 21px;
    }
  }
  &--serial {
    width: 80px;
    height: 14px;

    &__mobile {
      width: 120px;
      height: 14px;
    }
  }
  &--price {
    width: 64px;
    height: 24px;
  }
}

@keyframes loading {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}
</style>
