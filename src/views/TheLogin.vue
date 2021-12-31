<template>
  <div class="flex h-screen">
    <div class="login-contents flex-initial w-3/5 p-2 text-right">
      <div class="login h-full w-1/2 ml-auto">
        <div class="mb-7">
          <img class="image-logo" src="/image/logo_iam.png" alt="" />
        </div>
        <div>
          <div>로그인을 하세요.</div>
        </div>
        <AppTextField v-model="login.id" label="idField" label-text="아이디" @keyup.enter="login.on" />
        <AppTextField v-model="login.pw" input-type="password" label="pwField" label-text="비밀번호" @keyup.enter="login.on" />
        <div class="py-2">
          <AppButton button-name="로그인" class="btn primary-gradient" @click="login.on" />
        </div>
        <div class="py-2">
          <AppButton button-name="홈페이지" class="btn secondary" @click="windowOpen('home.sery.co.kr')" />
        </div>
      </div>
    </div>
    <div class="image-contents border-l-2 pl-2 flex-initial w-2/5">
      <img src="/image/background/background.svg" class="h-full" alt="" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { loginApi } from '@/api/api';
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
    const router = useRouter();
    const login = reactive<LoginInfo>({
      id: 'admin',
      pw: 'admin',
      on: async () => {
        if (!login.id) {
          alert('아이디를 입력해주세요.');
          return;
        }
        if (!login.pw) {
          alert('비밀번호를 입력해주세요.');
          return;
        }

        try {
          const result = await loginApi.post(login);
          if (result.state === 'error') {
            alert(result.msg);
            return;
          }
          localStorage.setItem('accessToken', result.accessToken);

          router.push('/v1');
        } catch (e) {
          console.log(e);
        }
      },
    });
    const windowOpen = (url: string): void => {
      window.open(`https://${url}`);
    };

    return {
      login,
      windowOpen,
    };
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
