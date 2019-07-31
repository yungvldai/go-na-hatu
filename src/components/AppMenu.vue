<template>
  <div id="app__menu">
    <div
      v-if="userChoice === 'find'"
      v-ripple
      class="to__item"
      style="border-radius: 10px 0 0 10px;"
      @click="$router.push('/map')"
    >
      <i
        class="material-icons"
        style="color: #641E16;"
      >
        public
      </i>
      <span class="item__text">Карта</span>
    </div>
    <div
      v-if="userChoice === 'create'"
      v-ripple
      class="to__item"
      style="border-radius: 0 10px 10px 0;"
      @click="$store.commit('user/whatEdit', 'map')"
    >
      <i
        class="material-icons"
        style="color: #7A1085;"
      >
        location_on
      </i>
      <span class="item__text">Место</span>
    </div>
    <div
      v-if="userChoice === 'wait'"
      v-ripple
      class="to__item"
      style="border-radius: 0 10px 10px 0;"
      @click="() => {}"
    >
      <i
        class="material-icons"
        style="color: #FFB900;"
      >
        edit
      </i>
      <span class="item__text">Править</span>
    </div>
    <div class="spacer" v-if="userChoice !== 'go'" />
    <div
      v-if="userChoice === 'find'"
      v-ripple
      class="to__item"
      style="border-radius: 0 10px 10px 0;"
      @click="$router.push('/list')"
    >
      <i
        class="material-icons"
        style="color: #1B4F72;"
      >
        filter_none
      </i>
      <span class="item__text">Список</span>
    </div>
    <div
      v-if="userChoice === 'create'"
      v-ripple
      class="to__item"
      style="border-radius: 0 10px 10px 0;"
      @click="$store.commit('user/whatEdit', 'info')"
    >
      <i
        class="material-icons"
        style="color: #189266;"
      >
        edit
      </i>
      <span class="item__text">Информация</span>
    </div>
    <div
      v-if="userChoice === 'wait'"
      v-ripple
      class="to__item"
      style="border-radius: 0 10px 10px 0;"
      @click="$store.commit('user/confirmSet', true)"
    >
      <i
        class="material-icons"
        style="color: red;"
      >
        close
      </i>
      <span class="item__text">Удалить</span>
    </div>
    <div
      v-if="userChoice === 'go'"
      v-ripple
      class="to__item"
      style="border-radius: 0 10px 10px 0; width: 100%"
      @click="noGo"
    >
      <i
        class="material-icons"
        style="color: red;"
      >
        close
      </i>
      <span class="item__text">Я не приду</span>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      userChoice() {
        return this.$store.state.user.choice;
      }
    },
    methods: {
      noGo() {
        localStorage.removeItem('go--to');
        this.$store.commit('user/setChoice', null);
        this.$store.commit('go/delete');
        //API call
        setTimeout(() => this.$router.push('/'), 200);
      }
    }
  }
</script>

<style scoped lang="scss">
  #app__menu {
    width: 60%;
    height: 64px;
    background-color: white;
    position: fixed;
    top: 70px;
    left: calc(20% - 2px);
    border-radius: 10px;
    box-shadow: 7px 7px 20px -9px rgba(0,0,0,0.75);
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 80;
  }
  .spacer {
    width: 1px;
    background-color: $appBorder;
    height: 42px;
  }
  .to__item {
    .item__text {
      color: #7F8C8D;
      font-size: 10pt;
    }
    height: 64px;
    width: calc(50% - 1px);
    user-select: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    position: relative;
  }

</style>
