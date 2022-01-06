<template>
  <div class="app-dialog-container-wrap">
    <div class="app-dialog-container">
      <div class="dialog-header">
        <slot name="header"></slot>
      </div>
      <div class="dialog-body">
        <slot name="body"></slot>
      </div>
      <div class="dialog-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppDialog',
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.app-dialog-container-wrap {
  @apply fixed left-0 top-0 right-0 bottom-0;
  background-color: rgba(0, 0, 0, 0.3);
  .dialog-header {
    
  }
}
</style>
