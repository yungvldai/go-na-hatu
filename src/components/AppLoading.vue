<template>
  <div id="app__loading">
    <img style="width: 30%;" src="/dance.gif" />
  </div>
</template>

<script>
  export default {
    data: () => ({

    }),
  }
</script>

<style lang="scss" scoped>

  #app__loading {
    width: 100%;
    height: calc(100% - 64px);
    position: fixed;
    top: 64px;
    left: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    z-index: 60;
  }
</style>
