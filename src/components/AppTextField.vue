<template>
  <div class="app-text-field w-full">
    <div class="app-text-field-wrap py-3 relative">
      <input
        :id="props.label"
        :type="inputType"
        class="app-input h-9 w-full px-2"
        :class="{ actived: props.modelValue }"
        autocomplete="off"
        @keyup="emits.returnValue"
      />
      <label :for="props.label" class="app-input-label">{{ props.labelText }}</label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppTextField',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    labelText: {
      type: String,
      default: '',
    },
    inputType: {
      type: String,
      default: 'text',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const emits = {
      returnValue: (event: Event) => {
        emit('update:modelValue', (event.target as HTMLInputElement).value);
      },
    };

    return {
      props,
      emits,
    };
  },
});
</script>

<style scoped lang="scss">
.app-input {
  @apply rounded;
  border: 0;
  outline: 1px solid $primary;
  color: $formFieldText;

  &:focus,
  &.actived {
    outline: 1px solid $secondary;

    & ~ .app-input-label {
      color: $secondary;
      @apply text-sm;
      @apply transform -translate-y-2;
      @apply top-0;
      transition: font-size 0.3s ease-in-out, transform 0.2s ease-in-out, top 0.3s ease-in-out;
    }
  }
}

.app-input-label {
  @apply absolute;
  @apply left-1 top-1/2;
  @apply transform -translate-y-1/2;
  @apply text-base;
  transition: font-size 0.3s ease-in-out, transform 0.2s ease-in-out, top 0.3s ease-in-out;
  color: $primary;
}
</style>
