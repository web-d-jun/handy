<template>
  <div class="flex h-screen">
    <div class="login-contents flex-initial w-3/5 md:p-16 sm:p-5 text-right">
      <div class="login h-full w-1/2 ml-auto">
        <AppTextField />
      </div>
    </div>
    <div class="image-contents flex-initial w-2/5"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
// import faker from 'faker';
import AppTextField from '@/components/AppTextField.vue';

export default defineComponent({
  name: 'Login',
  components: {
    AppTextField,
  },
  setup() {
    // console.log(faker.image.fashion())
    return {};
  },
});
</script>
<style scoped>
.login-contents {
  border: 1px solid red;
}

.login {
  border: 1px solid red;
}

.image-contents {
  border: 1px solid blue;
}
</style>