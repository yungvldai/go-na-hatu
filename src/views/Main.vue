<template>
  <div id="main__view">
    <div class="legends">
      <span class="link">About</span>
      <span class="link">Development</span>
      <span class="link">API</span>
      <span class="link">Donate</span>
    </div>
    <div class="flex__container">
      <div id="greet">

      </div>
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
      position: absolute;
      width: 100%;
      bottom: 0px;
      left: 0px;
      padding-bottom: 8px;
      color: grey;
      font-size: 10pt;
      text-align: center;
      .link {
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
      height: 100%;
      width: 100%;
      position: relative;
      #greet {
        height: 50%;
        margin-bottom: 40px;
        width: 100%;
        background-image: url('/bg.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        box-shadow: 7px 7px 20px -4px rgba(0,0,0,0.75);
        border-radius: 0 0 10em 10em/0 0 1em 1em;
      }
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
    position: absolute;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0px;
  }
</style>
