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
import { getUsers2 } from '@/api/testApi';

export default defineComponent({
  name: 'App',
  components: {
    TheHeader,
    TheLeftMenu,
  },
  setup() {
    const getApi2 = async () => {
      const users = await getUsers2();
      console.log(users);
    };
    getApi2();

    return {};
  },
});
</script>
<style scoped></style>