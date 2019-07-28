<template>
  <div id="poll">
  </div>
</template>

<script>
  //import io from 'socket.io-client';

  export default {
    data: () => ({
      socket: null
    }),
    mounted() {
      if (!this.userChoice) {
        this.$store.commit('user/setChoice', 'wait');
      }
      //this.socket = io('ws://gonahatu.herokuapp.com');
    }
  }
</script>

<style scoped lang="scss">
  #poll {
    margin-top: 82px;
  }
</style>
