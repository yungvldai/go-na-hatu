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
    position: relative;
    margin-top: 64px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    height: 400px;
  }
</style>
