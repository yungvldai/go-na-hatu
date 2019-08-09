<template>
  <div id="app__nav" @touchmove.prevent>
    <transition name="slide-fade">
      <div v-if="userChoice && $store.state.app.isMobile && !$store.state.go.party" id="back__button" v-ripple @click="$router.back()">
        <i class="material-icons" style="margin-left: 4px;">
          arrow_back_ios
        </i>
      </div>
    </transition>
    <transition name="slide-fade">
      <div v-if="$store.state.owner.party && $store.state.app.isMobile" id="party__button" v-ripple @click="$router.push('/poll')">
        <i class="material-icons" style="margin-right: 4px; margin-left: 2px;">
          home
        </i>
      </div>
    </transition>
    <div id="nav__bar" :style="styles('bar')">
      <div id="logo" :style="styles('logo')" @click="$router.push('/')">
        <img src="/logo_lol.png" style="width: 160px;"/>
      </div>
    </div>
    <transition name="slide-fade">
      <app-menu v-if="userChoice"/>
    </transition>
    <transition name="fade-fast">
      <div class="persistent" v-if="persistent" @click="closeDialog"/>
    </transition>
    <transition name="slide-fade-fast">
      <div class="dialog" v-if="$store.state.user.confirm && userChoice === 'wait'">
        Вы уверены?
        <div class="flex__container">
          <ui-button color="red" :border="false" :action="confirmDelete" style="margin-right: 20px;">
            Да
          </ui-button>
          <ui-button color="green" :border="false" :action="() => $store.commit('user/confirmSet', false)">
            Нет
          </ui-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import AppMenu from './AppMenu.vue';

  export default {
    data: () => ({
      dialog: false
    }),
    components: {
      AppMenu
    },
    methods: {
      closeDialog() {
        this.$store.commit('user/confirmSet', false);
      },
      deleteParty() {
        let context = this;
        this.$store.dispatch('party/delete', {callback: () => {
          this.$store.commit('owner/delete');
          this.$router.push('/');
          localStorage.removeItem('party--id');
          localStorage.removeItem('private--key');
        }, id: context.ownerPartyId, key: localStorage.getItem('private--key') });
      },
      confirmDelete() {
        this.deleteParty();
        this.$router.push('/');
        this.$store.commit('user/confirmSet', false);
      }
    },
    computed: {
      persistent() {
        return this.$store.state.user.confirm;
      },
      ownerPartyId() {
        return this.$store.state.owner.party.id;
      },
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
  .persistent {
    background-color: rgba(0,0,0,0.5);
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 98;
  }
  .dialog {
    position: fixed;
    top: calc(50% - 60px);
    left: 10px;
    padding: 14px;
    width: calc(100% - 48px);
    background-color: white;
    box-shadow: 7px 7px 20px -9px rgba(0,0,0,0.75);
    z-index: 99;
    .flex__container {
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: flex-end;
    }
  }
  .fade-fast-enter-active {
    transition: all .3s ease-in-out;
  }
  .fade-fast-leave-active {
    transition: all .3s ease-in-out;
  }
  .fade-fast-enter, .fade-fast-leave-to {
    opacity: 0;
  }
  .slide-fade-fast-enter-active {
    transition: all .3s ease-in-out;
  }
  .slide-fade-fast-leave-active {
    transition: all .3s ease-in-out;
  }
  .slide-fade-fast-enter, .slide-fade-fast-leave-to {
    transform: translateY(20px);
    opacity: 0;
  }
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
  #party__button {
    font-size: 18pt;
    position: fixed;
    color: white;
    top: 15px;
    right: 14px;
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
