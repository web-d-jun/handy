<template>
  <div class="app-menus">
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
import { defineComponent } from 'vue';

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
    return { props };
  },
});
</script>
<style lang="scss" scoped>
.app-menus {
  @apply relative;
  .list-contents {
    min-width: 121px;
    @apply absolute right-0;
    .menu-list {
      .item {
        @apply w-auto h-auto;
      }
    }
  }
}
</style>
