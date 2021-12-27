<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'component-slide-fade'" mode="out-in">
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
<style scoped>
.component-slide-fade-enter-active {
  transition: all 1s ease-out;
}

.component-slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.component-slide-fade-enter-from,
.component-slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
