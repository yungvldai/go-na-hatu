<template>
  <div id="app__nav">
    <div id="back__button" v-ripple @click="$router.back()">
      <i class="material-icons" style="margin-left: 4px;">
        arrow_back_ios
      </i>
    </div>
    <div id="nav__bar" :style="styles('bar')">
      <div id="logo" :style="styles('logo')">
        <img src="/logo_lol.png" style="width: 160px;"/>
      </div>
    </div>
    <transition name="slide-fade">
      <app-menu v-if="userChoice"/>
    </transition>
  </div>
</template>

<script>
  import AppMenu from './AppMenu.vue';

  export default {
    components: {
      AppMenu
    },
    computed: {
      userChoice() {
        return this.$store.state.user.choice;
      },
      styles() {
        return function (forWhat) {
          if (forWhat === 'bar') {
            return {
              height: this.userChoice ? '104px' : '64px',
              'border-radius': this.userChoice ? '0 0 50% 50%' : '0',
              'box-shadow': this.userChoice ? '0px 2px 14px -2px black' : 'none'
            };
          }
          if (forWhat === 'logo') {
            return {
              'margin-bottom': this.userChoice ? '36px' : '0px'
            }
          }
        }
      }
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
    transform: translateY(20px);
    opacity: 0;
  }

  #logo {
    transition: all .8s ease 0.2s;
  }

  #back__button {
    font-size: 18pt;
    position: fixed;
    color: white;
    top: 15px;
    left: 14px;
    z-index: 63;
    padding: 4px;
    padding-right: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.05);
  }

  #nav__bar {
    width: 100%;
    background-color: $appColor;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: height 0.6s, border-radius 0.8s, box-shadow 0.8s;
    z-index: 62;
  }
</style>
