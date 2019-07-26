<template>
  <div id="party__list">
    <one-party v-for="(party, index) in partyList" :key="`${party.id}@${index}`" :party="party" />
  </div>
</template>

<script>
  import OneParty from './Party.vue';
  export default {
    mounted() {
      if (!this.userChoice) {
        this.$store.commit('user/setChoice', 'find');
      }
      this.$store.dispatch('party/get', () => {
        let scroll = this.$store.state.user.scroll;
        setTimeout(() => {
          window.scrollTo(scroll.x, scroll.y);
        }, 10);
      });
    },
    components: {
      OneParty
    },
    computed: {
      partyList() {
        return this.$store.state.party.partyList;
      },
      userChoice() {
        return this.$store.state.user.choice;
      }
    }
  }
</script>

<style scoped lang="scss">
  #party__list {
    margin-top: 82px;
  }
</style>
