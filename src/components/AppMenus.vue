<template>
  <div class="app-menus">
    <slot name="button" :user="{ test: 11 }"></slot>
    <div class="list-contents">
      <ui class="menu-list">
        <li v-for="(item, index) in props.list" :key="index">{{ item }}</li>
      </ui>
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
    // @apply hidden;
    @apply absolute;
    .menu-list {
      list-style-type: none;
    }
  }
}
</style>
