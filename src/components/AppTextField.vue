<template>
  <div class="app-text-field w-full">
    <div class="app-text-field-wrap py-3 relative">
      <input :id="props.label" type="text" class="app-input h-9 w-full" @keyup="returnValue($event.target.value)" />
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
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    console.log(props);
    const returnValue = (value: string) => {
      emit('update:modelValue', value);
    };
    return {
      props,
      returnValue,
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

  &:focus {
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
