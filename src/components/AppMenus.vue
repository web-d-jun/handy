<template>
  <div class="app-menus">
    <slot name="button" :user="{ test: 11 }"></slot>
    <div class="list-contents">
      <slot></slot>
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
      default () {
        return [];
      },
    },
  },
  setup(props) {
    console.log(props);
    return {};
  },
});
</script>
<style lang="scss" scoped>
.app-menus {
  @apply relative;
  .list-contents {
    @apply hidden;
  }
}
</style>
