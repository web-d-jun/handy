<template>
  <div class="app-menus toggle" :class="{ show: showList }">
    <div @click="toggle">
      <slot name="button"></slot>
    </div>
    <div @click="toggle">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AppMenus',
  setup(props) {
    const showList = ref(false);

    const toggleListenerEvent = ($event: Event) => {
      const elem = $event.target as HTMLDivElement;
      const target = document.querySelector('.app-menus.toggle') as HTMLDivElement;
      if (target !== elem && !target.contains(elem)) {
        showList.value = false;
        document.removeEventListener('click', toggleListenerEvent);
      }
    };

    const toggle = () => {
      showList.value = !showList.value;
      if (showList.value) {
        document.addEventListener('click', toggleListenerEvent);
      } else {
        document.removeEventListener('click', toggleListenerEvent);
      }
    };

    return { props, showList, toggle };
  },
});
</script>
<style lang="scss" scoped>
.app-menus {
  @apply relative;
  &.show {
    ::v-slotted(.list-contents) {
      @apply block;
    }
  }
  ::v-slotted(.list-contents) {
    @apply absolute right-0 px-3 bg-white shadow rounded hidden;
    .menu-list {
      .item {
        @apply w-auto h-9 leading-9 whitespace-nowrap cursor-pointer text-sm;
      }
    }
  }
}
</style>
