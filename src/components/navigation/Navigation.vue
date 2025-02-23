<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import Logo from "@/assets/images/logo.svg";
import Icon from "@/components/ui/Icon.vue";
import Button from "@/components/ui/Button.vue";
import Search from "@/components/Search/Search.vue";

const route = useRoute();

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = (e?: MouseEvent) => {
  if (e) e.stopPropagation();
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  // Prevent body scroll when menu is open
  document.body.style.overflow = isMobileMenuOpen.value ? "hidden" : "";
};

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === "Escape" && isMobileMenuOpen.value) {
    toggleMobileMenu();
  }
};

const handleClickOutside = (e: MouseEvent) => {
  if (
    isMobileMenuOpen.value &&
    !(e.target as Element).closest(".mobile-menu")
  ) {
    toggleMobileMenu();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleEscape);
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleEscape);
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <header role="banner" class="header">
    <!-- Desktop Navigation -->
    <nav class="nav container" aria-label="Main navigation">
      <div class="nav__logo">
        <router-link to="/" aria-label="Go to Home">
          <div class="d-flex align-center">
            <Logo aria-hidden="true" />
          </div>
        </router-link>
      </div>

      <div class="nav__content d-flex justify-end align-center">
        <Search v-if="route.name !== 'Not Found'" class="nav__search" />

        <div class="nav__actions d-flex align-center">
          <Button
            variant="icon"
            class="nav__icon-btn"
            aria-label="Open settings"
          >
            <template #icon>
              <Icon name="settings" aria-hidden="true" />
            </template>
          </Button>

          <Button
            variant="icon"
            class="nav__icon-btn"
            aria-label="View notifications"
          >
            <template #icon>
              <Icon name="notifications" aria-hidden="true" />
            </template>
          </Button>

          <Button
            variant="secondary"
            class="nav__user-btn"
            aria-label="View profile"
          >
            <Icon name="user" aria-hidden="true" />
            <span class="font-sm ml-2">Maciej Bak</span>
          </Button>
        </div>
      </div>
    </nav>

    <!-- Mobile Navigation -->
    <div class="mobile-nav">
      <div class="mobile-top-bar">
        <router-link to="/" aria-label="Go to Home">
          <div class="d-flex align-center">
            <Logo aria-hidden="true" />
          </div>
        </router-link>

        <Button
          variant="icon"
          class="hamburger-btn"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          @click="(e: MouseEvent | undefined) => toggleMobileMenu(e)"
        >
          <template #icon>
            <Icon name="hamburger-menu" aria-hidden="true" />
          </template>
        </Button>
      </div>

      <div class="mobile-search">
        <Search v-if="route.name !== 'Not Found'" />
      </div>

      <!-- Mobile Menu Side Panel -->
      <div
        id="mobile-menu"
        class="mobile-menu"
        :class="{ 'mobile-menu--open': isMobileMenuOpen }"
        role="navigation"
        aria-label="Mobile navigation"
      >
        <Button
          variant="icon"
          class="mobile-menu__close"
          aria-label="Close mobile menu"
          @click="toggleMobileMenu"
        >
          <template #icon>
            <Icon name="close" aria-hidden="true" />
          </template>
        </Button>
        <div class="mobile-menu__content">
          <Button
            variant="secondary"
            class="mobile-menu__item"
            aria-label="View settings"
            @click="toggleMobileMenu"
          >
            <Icon name="settings" aria-hidden="true" />
            <span class="ml-2">Settings</span>
          </Button>

          <Button
            variant="secondary"
            class="mobile-menu__item"
            aria-label="View notifications"
            @click="toggleMobileMenu"
          >
            <Icon name="notifications" aria-hidden="true" />
            <span class="ml-2">Notifications</span>
          </Button>

          <Button
            variant="secondary"
            class="mobile-menu__item"
            aria-label="View profile"
            @click="toggleMobileMenu"
          >
            <Icon name="user" aria-hidden="true" />
            <span class="ml-2">Maciej Bak</span>
          </Button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: sticky;
  background-color: var(--color-white);
  top: 0;
  z-index: 100;
}

// Desktop Navigation
.nav {
  display: none;

  @media (min-width: 768px) {
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0 var(--space-6);
  }

  &__logo {
    margin-right: var(--space-8);
  }

  &__content {
    flex: 1;
  }

  &__search {
    max-width: 360px;
    width: 100%;
    margin-right: var(--space-8);
  }

  &__actions {
    gap: var(--space-2);
  }

  &__icon-btn {
    flex-shrink: 0;
    width: 44px;
    height: 44px;
    padding: 0;
    min-width: 44px;
  }

  &__user-btn {
    height: 44px;
    min-width: 121px;
    background-color: transparent;
    color: var(--color-primary);
    padding: 0 var(--space-3);

    &:hover {
      color: var(--color-primary) !important;
    }
  }
}

// Mobile Navigation
.mobile-nav {
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
}

.mobile-top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-4) var(--space-6);
  height: 80px;
}

.mobile-search {
  padding: 0 var(--space-4) var(--space-4);
}

.hamburger-btn {
  width: 44px;
  min-width: 44px;
  height: 44px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  &:hover {
    background-color: var(--color-gray-light);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
}

.mobile-menu {
  width: 300px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 1010;
  transform: translateX(100%);
  transition: transform var(--transition);
  border-left: 1px solid var(--color-border);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  @media (min-width: 768px) {
    display: none;
  }

  &--open {
    transform: translateX(0);
  }

  &__close {
    position: absolute;
    width: 44px;
    height: 44px;
    padding: 0;
    min-width: 44px;
    top: var(--space-4);
    left: var(--space-4);
  }

  &__content {
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  &__item {
    width: 100%;
    height: 56px;
    border: none;
    background: transparent;
    cursor: pointer;
    color: var(--color-text-primary);
    transition: var(--transition);
    display: flex;
    align-items: center;
    justify-content: flex-start !important;

    &:hover {
      background-color: var(--color-gray-light);
    }

    &:focus-visible {
      outline: 2px solid var(--color-primary);
      outline-offset: -2px;
    }
  }
}
</style>
