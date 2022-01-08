<template>
  <div class="app-dialog-container-wrap" :name="props.nameTest" :class="{ show: show }" @click="dialog.hide">
    <div class="app-dialog-container">
      <slot name="modal"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AppDialog',
  props: {
    nameTest: {
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
      },
    };

    return { props, show, dialog };
  },
});
</script>
<style lang="scss" scoped>
.app-dialog-container-wrap {
  @apply fixed left-0 top-0 right-0 bottom-0 hidden;
  &.show {
    @apply block;
  }

  background-color: rgba(0, 0, 0, 0.3);
  .app-dialog-container {
    background-color: #fff;
    @apply absolute w-full h-full;
    @apply md:rounded md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:top-1/2 md:left-1/2 md:w-auto md:h-auto;
    .dialog-header {
      @apply h-9 w-full;
    }
  }
}
</style>
