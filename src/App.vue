<template>
  <div>
    <router-link to="/testVue">testVue</router-link>
    <Suspense>
      <template #default>
        <router-view></router-view>
      </template>
      <template #fallback>
        <div>...loading</div>
      </template>
    </Suspense>
  </div>

</template>

<script setup lang='ts'></script>
<style scoped>

</style>
