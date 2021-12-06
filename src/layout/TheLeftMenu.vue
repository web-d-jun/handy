<template>
  <div class="w-1/5 h-full flex flex-col left-menu sticky h-screen overflow-y-auto left-0 top-0 bg-gray-900">
    <div class="user-info">cho jun young cjy874545@gmail.com</div>
    <div v-for="(item, index) in menu" :key="index">
      <AppButton v-bind="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppButton from '@/components/AppButton.vue';
import Menu from '@/ts/menu';

export default defineComponent({
  name: 'TheLeftMenu',
  components: {
    AppButton,
  },
  setup() {
    const menu = Menu;
    return {
      menu,
    };
  },
});
</script>

<style scoped lang="scss">
.left-menu {
}
</style>
