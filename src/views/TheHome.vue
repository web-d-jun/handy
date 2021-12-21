<template>
  <div class="flex">
    <TheLeftMenu />
    <div class="w-full">
      <TheHeader />
      <main class="view-page w-full">
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
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from '@/layout/TheHeader.vue';
import TheLeftMenu from '@/layout/TheLeftMenu.vue';

export default defineComponent({
  name: 'Home',
  components: {
    TheHeader,
    TheLeftMenu,
  },
  setup() {
    return {};
  },
});
</script>
