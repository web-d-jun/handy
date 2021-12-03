<template>
  <div class="w-1/4 h-full flex flex-col left-menu">
    <div v-for="(item, index) in menu" :key="index">
      <AppButton />
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
  border: 1px solid;
}
</style>
