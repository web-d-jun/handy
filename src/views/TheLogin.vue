<template>
  <div class="flex h-screen">
    <div class="login-contents flex-initial w-3/5"></div>
    <div class="image-contents flex-initial w-2/5"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import faker from 'faker';

export default defineComponent({
  name: 'Login',
  setup() {
    console.log(faker.image.fashion())
    return {};
  },
});
</script>
<style scoped>
.login-contents {
  border: 1px solid red;
}

.image-contents {
  border: 1px solid blue;
}
</style>