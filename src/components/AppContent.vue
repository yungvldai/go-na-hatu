<template>
  <div id="app__content">
    <router-view v-if="$store.state.app.isMobile"/>
    <no-desktop v-else />
  </div>
</template>

<script>
  import NoDesktop from '@/views/NoDesktop.vue';

  export default {
    components: {
      NoDesktop
    }
  }
</script>

<style scoped>

  #app__content {
    width: 100%;
    position: absolute;
    top: 64px;
    left: 0px;
    height: calc(100% - 64px);
  }
</style>
