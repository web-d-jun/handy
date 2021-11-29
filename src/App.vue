<template>
  <TheHeader />
  <suspense>
    <template #default>
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition || 'fade'" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </template>
    <template #fallback>
      <div>...loading</div>
    </template>
  </suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from '@/layout/TheHeader.vue';

export default defineComponent({
  name: 'App',
  components: {
    TheHeader,
  },
  setup() {
    return {};
  },
});
</script>
<style scoped></style>
