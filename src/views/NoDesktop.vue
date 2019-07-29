<template>
  <div id="not__found">
    <img style="width: 240px;" src="/no-desktop.png" />
    <span class="hint">У этого сайта нет десктоп версии, извините.</span>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$store.commit('user/setChoice', null);
      this.$store.commit('app/loading', false);
      this.$store.commit('owner/delete');
    }
  }
</script>

<style lang="scss" scoped>
  #not__found {
    .nf {
      font-size: 80pt;
      color: $appColor;
    }
    .hint {
      color: $appColor;
      margin-bottom: 50px;
    }
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
