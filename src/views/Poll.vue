<template>

</template>

<script>
  import io from 'socket.io-client';

  export default {
    data: () => ({
      socket: null
    }),
    mounted() {
      this.socket = io('ws://gonahatu.herokuapp.com');
    }
  }
</script>
