<template>
  <div id="app__loading">

  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  #app__loading {
    width: 100%;
    height: calc(100% - 64px);
    position: fixed;
    top: 64px;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
    z-index: 60;
  }
</style>
