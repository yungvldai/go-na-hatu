<template>
  <div id="app__menu">
    <div
      v-ripple
      class="to__item"
      style="border-radius: 10px 0 0 10px;"
      @click="$router.push('/map')"
    >
      <i
        class="material-icons"
        style="color: #641E16;"
      >
        location_on
      </i>
      <span class="item__text">Карта</span>
    </div>
    <div class="spacer" />
    <div
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
  </div>
</template>

<script>
  export default {
    computed: {

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
