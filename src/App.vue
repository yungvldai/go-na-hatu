<template>
  <div id="app">
    <nav-bar />
    <transition name="enter">
      <app-loading v-show="loading" />
    </transition>
    <app-content v-show="!loading" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import AppContent from '@/components/AppContent.vue';
import AppLoading from '@/components/AppLoading.vue';

export default {
  name: 'app',
  components: {
    NavBar,
    AppContent,
    AppLoading
  },
  computed: {
    loading() {
      return this.$store.state.app.loading;
    }
  }
}
</script>

<style scoped>
  .enter-enter-active {
    transition: all .3s ease-in-out;
  }
  .enter-leave-active {
    transition: all .3s ease-in-out;
  }
  .enter-enter, .enter-leave-to {
    opacity: 0
  }
</style>
