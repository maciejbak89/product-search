<script setup lang="ts">
import { ref } from "vue";
import Icon from "@/components/ui/Icon.vue";
import Button from "@/components/ui/Button.vue";
import Search from "@/components/Search/Search.vue";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <header class="border-bottom" role="banner">
    <!-- Desktop Navigation -->
    <nav class="nav align-center px-6 py-4" aria-label="Main navigation">
      <div class="d-flex align-center gap-8">
        <!-- <img src="@/assets/logo.svg" alt="Storm logo" class="nav__logo" /> -->
        <span class="font-bold text-primary">Storm</span>
      </div>

      <Search class="nav__search" />

      <div class="nav__actions d-flex align-center gap-4">
        <Button
          variant="icon"
          class="nav__action-btn"
          aria-label="Open settings"
        >
          <template #icon>
            <Icon name="close" aria-hidden="true" />
          </template>
        </Button>

        <Button
          variant="icon"
          class="nav__action-btn"
          aria-label="View notifications"
        >
          <template #icon>
            <Icon name="notifications" aria-hidden="true" />
          </template>
        </Button>

        <Button class="nav__action-btn" aria-label="View notifications">
          <template #icon>
            <Icon name="user" aria-hidden="true" />
          </template>
          Maciej Bak
        </Button>

        <!-- <div class="d-flex align-center gap-2">
          <Icon name="user" />
          <span class="font-sm text-primary">Maciej Bak</span>
        </div> -->
      </div>
    </nav>

    <!-- Mobile Navigation -->
    <!-- <div class="nav-mobile">
      <div class="nav-mobile__header d-flex align-center justify-between p-4">
        <div class="d-flex align-center gap-2">
          <img src="@/assets/logo.svg" alt="Storm logo" class="nav__logo" />
          <span class="font-bold text-primary">Storm</span>
        </div>
        <button
          class="hamburger-btn"
          aria-label="Toggle menu"
          :aria-expanded="isMobileMenuOpen"
          @click="toggleMobileMenu"
        >
          <Icon name="hamburger-menu" />
        </button>
      </div> -->

    <!-- Mobile Search -->
    <!-- <div class="nav-mobile__search px-4 pb-4">
        <Search />
      </div> -->

    <!-- Mobile Menu -->
    <!-- <div v-if="isMobileMenuOpen" class="mobile-menu">
        <div class="mobile-menu__content">
          <button class="mobile-menu__item d-flex align-center gap-2">
            <Icon name="settings" />
            <span>Settings</span>
          </button>
          <button class="mobile-menu__item d-flex align-center gap-2">
            <Icon name="notifications" />
            <span>Notifications</span>
          </button>
          <div class="mobile-menu__item d-flex align-center gap-2">
            <Icon name="user" />
            <span class="font-sm text-primary">Adriana Arias</span>
          </div>
        </div>
      </div> -->
    <!-- </div> -->
  </header>
</template>

<style lang="scss" scoped>
.nav {
  height: 76px;
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  &__logo {
    width: 32px;
    height: 32px;
  }

  &__search {
    flex: 1;
    max-width: 600px;
    margin: 0 var(--space-8);
  }

  &__action-btn {
    width: 40px;
    height: 40px;
    border: none;
    background: transparent;
    border-radius: var(--border-radius);
    cursor: pointer;
    color: var(--color-text-secondary);
    transition: var(--transition);

    &:hover {
      background-color: var(--color-gray-light);
    }
  }
}

.hamburger-btn {
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  border-radius: var(--border-radius);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
}

.mobile-menu {
  position: fixed;
  top: 128px; // Height of nav + search
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 90;

  @media (min-width: 768px) {
    display: none;
  }

  &__content {
    padding: var(--space-4);
  }

  &__item {
    width: 100%;
    padding: var(--space-4);
    border: none;
    background: transparent;
    text-align: left;
    cursor: pointer;
    color: var(--color-text-primary);
    transition: var(--transition);

    &:hover {
      background-color: var(--color-gray-light);
    }
  }
}
</style>
