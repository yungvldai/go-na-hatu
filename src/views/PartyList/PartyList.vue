<template>
  <div id="party__list">
    <one-party v-for="(party, index) in partyList" :key="`${party.id}@${index}`" :party="party" />
    <div class="white__block" v-if="!($store.state.owner.party || $store.state.go.party)">
      <ui-button color="#4A235A" width="calc(100% - 28px)" :action="goToCreate">
        <ui-icon indent="right" name="add" />
        Создать свою тусу
      </ui-button>
    </div>
    <div id="finder" :style="finderStyl">
      <div id="controller" @click="toggle">
        <ui-icon name="expand_less" :style="controllerStyl"/>
      </div>
      <div id="content">
        <span class="hint">Поиск и фильтры</span><br />
        <span class="hint">( скоро будут )</span>
      </div>
    </div>
  </div>
</template>

<script>
  import OneParty from './Party.vue';
  export default {
    data: () => ({
      finderShown: false
    }),
    mounted() {
      if (this.$store.state.go.party) {
        this.$router.push('/go');
        return;
      }
      if (this.userChoice !== 'find') {
        this.$store.commit('user/setChoice', 'find');
      }
      this.$store.dispatch('party/get', () => {
        let scroll = this.$store.state.user.scroll;
        setTimeout(() => {
          window.scrollTo(scroll.x, scroll.y);
        }, 10);
      });
    },
    methods: {
      goToCreate() {
        this.$router.push('/create');
      },
      toggle() {
        this.finderShown = !this.finderShown;
      }
    },
    components: {
      OneParty
    },
    computed: {
      finderStyl() {
        return this.finderShown ?
        {
          top: '200px'
        } : {
          top: 'calc(100% - 50px)'
        };
      },
      controllerStyl() {
        return this.finderShown ?
        {
          transition:'.5s',
          transform: 'rotate(180deg)',
          'font-size': '24pt',
          color: '#4A235A'
        } : {
          transition:'.5s',
          transform: 'rotate(0deg)',
          'font-size': '24pt',
          color: 'grey'
        };
      },
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
    .white__block {
      font-size: 12pt;
      margin: 10px;
      border-radius: 10px;
      margin-top: 0px;
      padding: 14px;
      box-shadow: 7px 7px 20px -16px rgba(0,0,0,0.75);
      background-color: white;
    }
    margin-top: 82px;
    margin-bottom: 40px;
    #finder {
      position: fixed;
      left: 0px;
      border-radius: 20px 20px 0 0;
      top: calc(100% - 50px);
      width: calc(100% - 40px);
      margin: 20px;
      z-index: 80;
      background-color: white;
      box-shadow: 0px -1px 47px -6px rgba(0,0,0,0.75);
      height: 100%;
      transition: 0.5s ease;
      #controller {
        color: grey;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      #content {
        margin: 10px;
        width: calc(100% - 20px);
        .hint {
          color: $appColor;
        }
      }
    }
  }
</style>
