<template>
  <div class="flex h-screen">
    <div class="login-contents flex-initial w-3/5 p-2 text-right">
      <div class="login h-full w-1/2 ml-auto">
        <div class="mb-7">
          <img class="image-logo" src="/image/logo_iam.png" alt="" />
        </div>
        <div>
          <div>로그인</div>
        </div>
        <AppTextField label="idField" label-text="아이디" />
        <AppTextField label="pwField" label-text="비밀번호" />
        <div class="py-2">
          <AppButton button-name="로그인" class="btn primary" />
        </div>
        <div class="py-2">
          <AppButton button-name="홈페이지" class="btn secondary" />
        </div>
      </div>
    </div>
    <div class="image-contents border-l-2 pl-2 flex-initial w-2/5">
      <img src="/image/background/background.svg" class="h-full" alt="" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
// import faker from 'faker';
import AppTextField from '@/components/AppTextField.vue';
import AppButton from '@/components/AppButton.vue';

export default defineComponent({
  name: 'Login',
  components: {
    AppTextField,
    AppButton,
  },
  setup() {
    // console.log(faker.image.fashion())
    return {};
  },
});
</script>
<style scoped lang="scss">
.login-contents {
  @apply md:p-16 sm:p-5;
}

.login {
  .image-logo {
    @apply rounded-full;
    @apply md:w-1/2 text-center mx-auto;
  }
}

.image-contents {
  @apply hidden md:block;
}
</style>
