<template>
  <div id="main__view">
    <div class="legends">
      <span class="link" @click="$router.push('/about')">О проекте</span>
      <a href="https://github.com/yungvldai/go-na-hatu" class="link">Разработка</a>
      <a href="mailto:support@gonahatu.ru" class="link">Поддержка</a>
    </div>
    <div class="flex__container">
      <img src="/pivo.png" style="width: 50%; margin-bottom: 40px;" /><br />
      <ui-button class="button" color="green" :action="goFind">
        <ui-icon name="supervisor_account" indent="right" />
        {{ goParty ? 'Я уже иду' : 'Найти' }}
      </ui-button>
      <div class="spacer" v-if="!goParty" />
      <ui-button v-if="!goParty" class="button" color="orange" :action="() => { ownerParty ? $router.push('/poll') : goCreate(); }">
        <ui-icon name="add" indent="right" />
        {{ ownerParty ? 'Перейти к моей тусе' : 'Организовать' }}
      </ui-button>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$store.commit('user/setChoice', null);
    },
    methods: {
      goFind() {
        if (this.goParty) {
          this.$router.push('/go');
          return;
        }
        this.$store.commit('user/setChoice', 'find');
        this.$router.push('/list');
      },
      goCreate() {
        this.$store.commit('user/setChoice', 'create');
        this.$store.commit('user/whatEdit', 'map');
        this.$router.push('/create');
      }
    },
    computed: {
      ownerParty() {
        return this.$store.state.owner.party;
      },
      goParty() {
        return this.$store.state.go.party;
      }
    }
  }
</script>

<style scoped lang="scss">
  #main__view {
    .legends {
      position: fixed;
      width: 100%;
      bottom: 0px;
      left: 0px;
      padding-bottom: 8px;
      font-size: 10pt;
      text-align: center;
      .link {
        color: grey !important;
        text-decoration: underline;
        margin-left: 5px;
        margin-right: 5px;
      }
    }
    .flex__container {
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      text-align: center;
      width: 100%;
      .spacer {
        height: 1px;
        background-color: $appBorder;
        width: 70%;
        margin: 20px;
        display: inline-block;
      }
      .button {
        margin: 10px;
      }
    }
    width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0px;
  }
</style>
