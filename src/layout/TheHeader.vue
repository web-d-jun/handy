<template>
  <header id="header">
    <div class="w-full p-3 shadow flex">
      <AppIconButton @click="handleMenuBar">
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
        <AppMenus>
          <template #button>
            <AppIconButton>
              <template #icon>
                <FontAwesomeIcon :icon="['far', 'user-circle']" />
                <span class="absolute rounded-full w-2 h-2 bg-green-500 bottom-0 right-0 mr-1 mt-1"></span>
              </template>
            </AppIconButton>
          </template>
          <div class="list-contents">
            <div class="menu-list">
              <div v-for="(item, index) in menuList" :key="index" class="item" @click="selectMenu.store(item)">
                {{ item.name }}
              </div>
            </div>
          </div>
        </AppMenus>
      </div>
    </div>
  </header>
  <AppDialog :name="'nameTest'">
    <template #modal>
      <div class="modal-container">
        <div>dsadsadas</div>
      </div>
    </template>
  </AppDialog>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, inject } from 'vue';
import { useRouter } from 'vue-router';
import AppIconButton from '@/components/AppIconButton.vue';
import AppMenus from '@/components/AppMenus.vue';
import AppDialog from '@/components/AppDialog.vue';

export default defineComponent({
  name: 'TheHeader',
  components: {
    AppIconButton,
    AppMenus,
    AppDialog,
  },
  setup() {
    
    const router = useRouter();
    const modal = inject<ModalInterface | undefined>('$modal');

    const openLeftMenuBar = ref(false);
    interface MenuList {
      value: string;
      name: string;
    }
    const menuList: MenuList[] = [
      {
        value: 'storeInfo',
        name: '매장정보',
      },
      {
        value: 'logout',
        name: '로그아웃',
      },
    ];

    const handleMenuBar = () => {
      openLeftMenuBar.value = !openLeftMenuBar.value;
      const leftMenuBar = document.querySelector('.left-menu');
      if (openLeftMenuBar.value) {
        leftMenuBar?.classList.add('opened');
      } else {
        leftMenuBar?.classList.remove('opened');
      }
    };
    const selectMenu = {
      store: (obj: { value: string; name: string }) => {
        const { value } = obj;
        if (value === 'storeInfo') {
          console.log('매장정보보기');
          modal?.show('nameTest')
        }
        if (value === 'logout') {
          localStorage.removeItem('accessToken');
          router.push('/login');
        }
      },
    };
    onMounted(() => {
      handleMenuBar();
    });
    return {
      handleMenuBar,
      menuList,
      selectMenu,
    };
  },
});
</script>
<style scoped lang="scss">
#header {
  background: $primaryGradient;
}
.modal-container {
  width: 600px;
  height: 600px;
}
</style>
