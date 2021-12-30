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
        </AppMenus>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import AppIconButton from '@/components/AppIconButton.vue';
import AppMenus from '@/components/AppMenus.vue';

export default defineComponent({
  name: 'TheHeader',
  components: {
    AppIconButton,
    AppMenus,
  },
  setup() {
    const openLeftMenuBar = ref(false);

    const handleMenuBar = () => {
      openLeftMenuBar.value = !openLeftMenuBar.value;
      // console.log('handleMenuBar', openLeftMenuBar.value);
      const leftMenuBar = document.querySelector('.left-menu');
      if (openLeftMenuBar.value) {
        leftMenuBar?.classList.add('opened');
      } else {
        leftMenuBar?.classList.remove('opened');
      }
      // console.log(leftMenuBar);
    };
    onMounted(() => {
      handleMenuBar();
    });
    return {
      handleMenuBar,
    };
  },
});
</script>
<style scoped lang="scss">
#header {
  background: $primaryGradient;
}
</style>