<template>
  <div class="flex h-screen">
    <div class="login-contents flex-initial w-3/5 md:p-16 sm:p-5 text-right">
      <div class="login h-full w-1/2 ml-auto">
        <img class="image-logo" src="/image/logo_iam.png" alt="" />
        <div>
          <div>로그인</div>
          <div>아이디가 없으신가요? 무료체험즐기기</div>
        </div>
        <AppTextField label="idField" labelText="아이디" />
        <AppTextField label="pwField" labelText="비밀번호" />
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
<style scoped lang="scss">
.login-contents {
  border: 1px solid red;
}

.login {
  border: 1px solid red;

  .image-logo {
    width: 80px;
    @apply rounded-full;
  }
}

.image-contents {
  border: 1px solid blue;
}
</style>
