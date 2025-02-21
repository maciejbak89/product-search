<script setup lang="ts">
import { ref } from "vue";
import Icon from "@/components/ui/Icon.vue";
import Search from "@/components/search/Search.vue";

const isMobileMenuOpen = ref(false);

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}
</script>

<template>
  <header class="bg-white border-bottom" role="banner">
    <!-- Desktop Navigation -->
    <nav class="nav d-none d-md-flex align-center" aria-label="Main navigation">
      <div class="d-flex align-center gap-8">
        <!-- <img src="@/assets/logo.svg" alt="Storm logo" class="nav__logo" /> -->
        <span class="font-bold text-primary">Storm</span>
      </div>

      <Search class="nav__search" />

      <div class="nav__actions d-flex align-center gap-4">
        <button class="nav__action-btn" aria-label="Open settings">
          <Icon name="settings" />
        </button>
        <button class="nav__action-btn" aria-label="View notifications">
          <Icon name="notifications" />
        </button>
        <div class="d-flex align-center gap-2">
          <Icon name="user" />
          <span class="font-sm text-primary">Adriana Arias</span>
        </div>
      </div>
    </nav>

    <!-- Mobile Navigation -->
    <div class="nav-mobile d-md-none">
      <div class="nav-mobile__header d-flex align-center justify-between p-4">
        <div class="d-flex align-center gap-2">
          <!-- <img src="@/assets/logo.svg" alt="Storm logo" class="nav__logo" /> -->
          <span class="font-bold text-primary">Storm</span>
        </div>
        <button
          class="hamburger-btn"
          @click="toggleMobileMenu"
          aria-label="Toggle menu"
          :aria-expanded="isMobileMenuOpen"
        >
          <Icon name="menu" />
        </button>
      </div>

      <!-- Mobile Search -->
      <div class="nav-mobile__search px-4 pb-4">
        <Search />
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="mobile-menu">
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
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.nav {
  height: 72px;
  padding: 0 var(--space-6);
  justify-content: space-between;

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
