<template>
  <div id="main__view">
    <div class="legends">
      <span class="link" @click="$router.push('/about')">О проекте</span>
      <a href="https://github.com/yungvldai/go-na-hatu" class="link">Разработка</a>
    </div>
    <div class="flex__container">
      <ui-button class="button" color="green" :action="goFind">
        <ui-icon name="supervisor_account" indent="right" />
        Найти
      </ui-button>
      <div class="spacer" />
      <ui-button class="button" color="orange" :action="goCreate">
        <ui-icon name="add" indent="right" />
        Организовать
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
        this.$store.commit('user/setChoice', 'find');
        setTimeout(() => this.$router.push('/list'), 200);
      },
      goCreate() {
        this.$store.commit('user/setChoice', 'create');
        this.$store.commit('user/whatEdit', 'map');
        setTimeout(() => this.$router.push('/create'), 200);
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
