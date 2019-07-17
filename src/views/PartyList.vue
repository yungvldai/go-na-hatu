<template>
  <div id="party__list">
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>
    sdfsdf<br>


  </div>
</template>

<script>
  export default {
    mounted() {
      if (!this.userChoice) {
        this.$store.commit('user/setChoice', 'find');
      }
      //TODO 'when api' this.$store.dispatch('party/get');
    },
    computed: {
      userChoice() {
        return this.$store.state.user.choice;
      }
    }
  }
</script>

<style scoped>
  #party__list {
    margin-top: 90px;
  }
</style>
