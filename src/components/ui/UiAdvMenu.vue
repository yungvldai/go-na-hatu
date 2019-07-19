<template>
  <div class="ui__menu">
    <i
      class="material-icons"
      style="user-select: none;"
      @click="show = true"
      v-click-outside="closeMenu"
    >
      more_vert
    </i>
    <transition name="menu">
      <div v-if="show" class="advanced__menu">
        <ui-button
          align="flex-start"
          :border="false"
          color="blue"
          width="calc(100% - 24px)"
          :action="() => {}"
        >
          <ui-icon name="share" indent="right" />
          Поделиться
        </ui-button>
        <ui-button
          align="flex-start"
          :border="false"
          style="margin-top: 2px;"
          color="red"
          width="calc(100% - 24px)"
          :action="() => {}"
        >
          <ui-icon name="report" indent="right" />
          Пожаловаться
        </ui-button>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: ['item'],
    data: () => ({
      show: false
    }),
    methods: {
      closeMenu() {
        this.show = false;
      }
    }
  }
</script>

<style scoped lang="scss">
  .menu-enter-active {
    transition: all .4s ease-in-out;
  }
  .menu-leave-active {
    transition: all .4s ease-in-out;
  }
  .menu-enter, .menu-leave-to {
    transform: translateY(20px);
    opacity: 0;
  }

  .ui__menu {
    user-select: none;
    .advanced__menu {
      position: absolute;
      top: 0px;
      right: 0px;
      padding: 10px;
      width: 190px;
      border-radius: 10px;
      box-shadow: 7px 7px 20px -9px rgba(0,0,0,0.75);
      background-color: white;
      z-index: 60;
    }
  }
</style>
