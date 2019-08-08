<template>
  <div id="wait__party">

  </div>
</template>

<script>
  export default {
    data: () => ({

    }),
    computed: {
      userChoice() {
        return this.$store.state.user.choice;
      }
    }
  }
</script>

<style scoped lang="scss">
  #wait__party {
    .hint {
      color: $appColor;
      margin-left: 4px;
      margin-bottom: 10px;
      display: block;
    }
  }
</style>
