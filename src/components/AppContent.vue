<template>
  <div id="app__content">
    <router-view />
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

  #app__content {
    width: 100%;
    position: absolute;
    top: 64px;
    left: 0px;
    height: calc(100% - 64px);
    z-index: 61;
  }
</style>
