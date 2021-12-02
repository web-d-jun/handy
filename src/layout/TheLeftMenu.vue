<template>
  <div class="w-1/4 h-full flex flex-col left-menu">Left Menu</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheLeftMenu',
});
</script>

<style scoped lang='scss'>
.left-menu {
  border: 1px solid;
}
</style>
