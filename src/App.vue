<template>
  <div class="container">
    <button class="active:bg-green-700">test</button>
    <div class="flex-shrink-0">image</div>
    <div>
      <div class="text-xl font-medium text-black">ChitChat</div>
      <p class="text-gray-500">You have a new message!</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
.container {
  @apply p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4;
}
</style>
