<template>
  <header>
    <div class="w-full p-2 shadow">
      <button class="bar-btn btn-active rounded-full w-8 h-8 hover:bg-black hover:bg-opacity-20 opacity-70">
        <FontAwesomeIcon :icon="['fas', 'bars']" />
      </button>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheHeader',
});
</script>
<style scoped lang="scss">
.bar-btn {
}
</style>