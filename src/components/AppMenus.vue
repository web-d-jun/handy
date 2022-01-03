<template>
  <div class="app-menus" :class="{ show: showList }" @click="showList = !showList">
    <slot name="button" :user="{ test: 11 }"></slot>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AppMenus',
  setup(props) {
    const showList = ref(false);
    return { props, showList };
  },
});
</script>
<style lang="scss" scoped>
.app-menus {
  @apply relative;
  &.show {
    ::v-slotted(.list-contents) {
      opacity: 1;
    }
  }
  ::v-slotted(.list-contents) {
    @apply absolute right-0 px-3 bg-white shadow rounded;
    opacity: 0;
    .menu-list {
      .item {
        @apply w-auto h-9 leading-9 whitespace-nowrap cursor-pointer text-sm;
      }
    }
  }
}
</style>
