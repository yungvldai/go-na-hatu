<template>
  <div id="poll">
  </div>
</template>

<script>
  import io from 'socket.io-client';

  export default {
    data: () => ({
      socket: null
    }),
    computed: {
      userChoice() {
        return this.$store.state.user.choice;
      },
      ownerParty() {
        return this.$store.state.owner.party;
      }
    },
    mounted() {
      if (this.userChoice !== 'wait') {
        this.$store.commit('user/setChoice', 'wait');
      }
      if (!this.ownerParty) {
        this.$router.push('/');
        return;
      }
      this.socket = io('ws://gonahatu.herokuapp.com');
    }
  }
</script>

<style scoped lang="scss">
  #poll {
    margin-top: 82px;
  }
</style>
