<template>
  <div class="left-menu">
    <div class="user-info px-2 pb-3.5 pt-3.5 text-center">
      <img src="/image/logo_iam.png" class="image-logo mx-auto" alt="" />
    </div>
    <div v-for="(item, index) in menu" :key="index">
      <div v-if="item.type === 'title'" class="nav-title-wrap pb-2 px-2 pt-4 mt-4 text-xs">
        <div class="nav-title">{{ item.name }}</div>
        <div class="nav-subtitle">{{ item.subName }}</div>
      </div>
      <AppNavButton v-else v-bind="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppNavButton from '@/components/AppNavButton.vue';
import Menu from '@/ts/menu';

export default defineComponent({
  name: 'TheLeftMenu',
  components: {
    AppNavButton,
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
  background-color: $secondary;
  @apply w-full h-full flex flex-col fixed h-screen overflow-y-auto right-0 left-0 top-0;
  @apply md:w-1/5 md:sticky;

  &:not(.opened) {
    transform: translateX(-100%);
    @apply fixed;
  }

  &.opened {
    @apply transition duration-500 ease-in-out;
  }

  & .nav-title {
    color: $third;
  }

  & .nav-subtitle {
    color: #000;
    opacity: 0.8;
  }

  & .image-logo {
    width: 50px;
    border-radius: 50%;
  }
}
</style>
