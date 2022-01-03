<template>
  <div class="app-menus" :class="{ show: showList }" @click="showList = !showList">
    <slot name="button" :user="{ test: 11 }"></slot>
    <div class="list-contents">
      <div class="menu-list">
        <div v-for="(item, index) in props.list" :key="index" class="item">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AppMenus',
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
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
    .list-contents {
      opacity: 1;
    }
  }
  .list-contents {
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
