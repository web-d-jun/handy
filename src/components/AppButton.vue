<template>
  <button type="button" class="app-button hover:opacity-90">{{ props.buttonName }}</button>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppButton',
  props: {
    buttonName: {
      default: 'primary',
      type: String,
    },
  },
  setup(props) {
    return { props };
  },
});
</script>
<style lang="scss" scoped>
.app-button {
  @apply w-full h-9 rounded;
}
</style>
