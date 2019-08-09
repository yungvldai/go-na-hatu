<template>
  <div id="poll">
    <edit-party v-if="whatWait === 'edit'" :editData="editData" :action="makePut" />
    <wait-party v-if="whatWait === 'wait'" />
  </div>
</template>

<script>
  import io from 'socket.io-client';
  import WaitParty from './WaitParty.vue';
  import EditParty from './EditParty.vue';

  export default {
    components: {
      WaitParty,
      EditParty
    },
    methods: {
      makePut() {
        let context = this;
        this.$store.dispatch('party/update', {
          payload: {
            ...this.editData,
            location: this.ownerParty.location,
            id: this.ownerParty.id
          },
          callback: () => {
            context.$store.dispatch('owner/reload');
            context.$store.commit('user/whatWait', 'wait');
          },
          key: localStorage.getItem('private--key')
        });
      }
    },
    data: () => ({
      socket: null,
      editData: {
        weWant: '',
        weHave: '',
        description: '',
        phone: '',
        address: '',
        ownerName: '',
        price: null,
        peopleNow: null,
        peopleMax: null,
        vkLink: ''
      }
    }),
    computed: {
      ownerParty() {
        return this.$store.state.owner.party;
      },
      whatWait() {
        return this.$store.state.user.whatWait;
      }
    },
    mounted() {
      if (this.$store.state.go.party) {
        this.$router.push('/go');
        return;
      }
      this.$store.commit('user/setChoice', 'wait');
      if (!this.ownerParty) {
        this.$router.push('/');
        return;
      }
      this.socket = io('wss://gonahatu.herokuapp.com');
    }
  }
</script>

<style scoped lang="scss">
  .slide-fade-enter-active {
    transition: all .8s ease-in-out;
  }
  .slide-fade-leave-active {
    transition: all .8s ease-in-out;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(100px);
    opacity: 0;
  }
  #poll {
    margin-top: 82px;
    padding: 10px;
    padding-top: 0px;
  }
</style>
