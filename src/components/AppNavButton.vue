<template>
  <div class="app-button-container mb-1.5">
    <div class="app-button-wrap px-3">
      <router-link :to="`${$attrs.link}`">
        <div
          class="app-button p-3 cursor-pointer rounded transform hover:translate-x-1.5"
          :class="{ active: $attrs.link === $route.path }"
        >
          <div class="menu-title text-white opacity-80 text-base font-mono">
            <span><FontAwesomeIcon :icon="[icon[0], icon[1]]" class="mr-2" /></span><span>{{ $attrs.name }}</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppNavButton',
  setup(props, { attrs }) {
    const icon = attrs.icon as string;
    const menu = {};
    return {
      menu,
      icon,
    };
  },
});
</script>

<style scoped lang="scss">
.app-button {
  &.active {
    @apply bg-white bg-opacity-20;
    box-shadow: 0 0 10px 1px rgba(255, 255, 255, var(--tw-bg-opacity));
  }
}
</style>
