<template>
  <div id="app__content">
    <router-view v-if="$store.state.app.isMobile"/>
    <no-desktop v-else />
    <transition name="fade-fast">
      <div id="snack" v-if="snack.show" >
        {{ snack.text }}
      </div>
    </transition>
  </div>
</template>

<script>
  import NoDesktop from '@/views/NoDesktop.vue';

  export default {
    components: {
      NoDesktop
    },
    computed: {
      snack() {
        return {show: this.$store.state.app.snackShow, text: this.$store.state.app.snackText};
      }
    }
  }
</script>

<style scoped lang="scss">
  .fade-fast-enter-active {
    transition: all .8s ease-in-out;
  }
  .fade-fast-leave-active {
    transition: all .8s ease-in-out;
  }
  .fade-fast-enter, .fade-fast-leave-to {
    opacity: 0;
    transform: translateY(100px);
  }

  #app__content {
    #snack {
      color: white;
      background-color: $appColor;
      position: fixed;
      bottom: 10px;
      left: 10px;
      width: calc(100% - 60px);
      padding: 20px;
      padding-top: 15px;
      padding-bottom: 15px;
      border-radius: 5px;
      z-index: 100;
    }
    width: 100%;
    position: absolute;
    top: 64px;
    left: 0px;
    height: calc(100% - 64px);
  }
</style>
