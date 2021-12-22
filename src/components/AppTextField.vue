<template>
  <div class='app-text-field w-full py-3'>
    <input type="text" class="app-input w-full h-9" />
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppTextField',
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.app-input {
  @apply rounded;
  border: 0;
  outline: 1px solid $fourth;

  &:focus {
    outline: 1px solid $third;
  }
}
</style>
