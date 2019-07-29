<template>
  <div id="about__page">

  </div>
</template>

<script>
  export default {
    mounted() {
      if (this.userChoice) {
        this.$store.commit('user/setChoice', null);
      }
    },
    computed: {
      userChoice() {
        return this.$store.state.user.choice;
      }
    }
  }
</script>

<style scoped lang="scss">
  #about__page {

  }

</style>
