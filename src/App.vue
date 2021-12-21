<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'" mode="out-in">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getUsers2 } from '@/api/testApi';

export default defineComponent({
  name: 'App',
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