<template>
  <header>
    <div class="w-full p-3 shadow flex">
      <AppIconButton>
        <template #icon>
          <FontAwesomeIcon :icon="['fas', 'bars']" />
        </template>
      </AppIconButton>
      <div class="flex-auto flex justify-end">
        <AppIconButton>
          <template #icon>
            <FontAwesomeIcon :icon="['far', 'bell']" />
          </template>
        </AppIconButton>
        <AppIconButton>
          <template #icon>
            <FontAwesomeIcon :icon="['far', 'user-circle']" />
            <span class="absolute rounded-full w-2 h-2 bg-green-500 bottom-0 right-0 mr-1 mt-1"></span>
          </template>
        </AppIconButton>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import AppIconButton from '@/components/AppIconButton.vue';

export default defineComponent({
  name: 'TheHeader',
  components: {
    AppIconButton,
  },
});
</script>
<style scoped lang="scss"></style>
