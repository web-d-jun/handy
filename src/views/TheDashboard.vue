<template>
  <div>DashBoard</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { io } from 'socket.io-client';

export default defineComponent({
  name: 'Dashboard',
  setup() {
    const socket = io('ws://localhost:3000', {});
    socket.emit('chat message', 'test message');
    socket.on('chat message', msg => {
      console.log(msg,'client');
    });
    return {};
  },
});
</script>