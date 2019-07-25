<template>
  <div id="party__create">
    <EditMap v-if="whatEdit === 'map'" :data="geoData" />
    <EditInfo v-if="whatEdit === 'info'" :createData="createData" />
  </div>
</template>

<script>
  import EditInfo from './EditInfo.vue';
  import EditMap from './EditMap.vue'

  export default {
    components: {
      EditMap,
      EditInfo
    },
    data: () => ({
      geoData: {
        location: null
      },
      createData: {
        weWant: '',
        weHave: '',
        description: '',
      }
    }),
    mounted() {
      if (!this.userChoice) {
        this.$store.commit('user/setChoice', 'create');
      }
    },
    computed: {
      userChoice() {
        return this.$store.state.user.choice;
      },
      whatEdit() {
        return this.$store.state.user.whatEdit;
      }
    }
  }
</script>

<style scoped lang="scss">
  #party__create {
    margin-top: 82px;
    padding: 10px;
  }
</style>
