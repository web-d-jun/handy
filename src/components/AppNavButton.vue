<template>
  <div class="app-button-container mb-1.5">
    <div class="app-button-wrap px-3">
      <div
        class="app-button p-3 cursor-pointer hover:bg-white hover:bg-opacity-20 rounded"
        :class="{ active: $attrs.link === $route.path }"
      >
        <router-link :to="`${$attrs.link}`">
          <div class="menu-title text-white opacity-80 text-base font-mono">
            <span><FontAwesomeIcon :icon="[$attrs.icon[0], $attrs.icon[1]]" class="mr-2" /></span><span>{{ $attrs.name }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppNavButton',
  setup() {
    const menu = {};
    return {
      menu,
    };
  },
});
</script>
<style scoped>
.app-button {
}
</style>
