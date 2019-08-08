<template>
  <div id="wait__party">
    <div class="pulse__circle"/>
    <div class="pulse__circle2"/>
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
    .pulse__circle {
      background-color: $appColor;
      opacity: 0.8;
      position: fixed;
      width: 0px;
      height: 0px;
      left: 50%;
      top: 50%;
      border-radius: 50%;
      animation: pulse 4s infinite ease-out;
    }
    .pulse__circle2 {
      background-color: $appColor;
      opacity: 0.8;
      position: fixed;
      width: 0px;
      height: 0px;
      left: 50%;
      top: 50%;
      border-radius: 50%;
      animation: pulse 4s infinite ease-out;
      animation-delay: 2s;
    }
  }

  @keyframes pulse {
    from {
      width: 0px;
      height: 0px;
      left: 50%;
      top: 50%;
      opacity: 0.8;
    }
    to {
      width: 1000px;
      height: 1000px;
      left: calc(50% - 500px);
      top: calc(50% - 500px);
      opacity: 0;
    }
  }
</style>
