<template>
  <header>
    <div class="w-full p-3 shadow">
      <button class="bar-btn rounded-full w-10 h-10 hover:bg-black hover:bg-opacity-20 opacity-70">
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
