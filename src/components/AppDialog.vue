<template>
  <div class="app-dialog-container-background" :name="props.name" :class="{ show: show }" @click="dialog.hide"></div>
  <div class="app-dialog-container" :class="{ show: show }">
    <slot name="modal"></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AppDialog',
  props: {
    name: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const show = ref(false);
    const dialog = {
      hide: (event: Event) => {
        const target = event.target as HTMLDivElement;
        target.style.display = 'none';
        const sibling = target.nextSibling as HTMLDivElement;
        sibling.style.display = 'none';
      },
    };

    return { props, show, dialog };
  },
});
</script>
<style lang="scss" scoped>
.app-dialog-container-background {
  @apply fixed left-0 top-0 right-0 bottom-0 hidden;
  background-color: rgba(0, 0, 0, 0.3);
  &.show {
    @apply block;
  }
}
.app-dialog-container-wrap {
  @apply fixed left-0 top-0 right-0 bottom-0 hidden;
  &.show {
    @apply block;
  }
}
.app-dialog-container {
  background-color: #fff;
  @apply fixed w-full h-full hidden;
  @apply md:rounded md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:top-1/2 md:left-1/2 md:w-auto md:h-auto;
  .dialog-header {
    @apply h-9 w-full;
  }
  &.show {
    @apply block;
  }
}
</style>
