<template>
  <div id="app">
    <nav-bar />
    <app-loading v-show="loading" />
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


</style>
