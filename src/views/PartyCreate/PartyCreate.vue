<template>
  <div id="party__create">
    <transition name="slide-fade">
      <EditMap v-if="whatEdit === 'map'" :data="geoData" />
    </transition>
    <transition name="slide-fade">
      <EditInfo v-if="whatEdit === 'info'" :createData="createData" />
    </transition>
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
        location: [-1, -1]
      },
      createData: {
        weWant: '',
        weHave: '',
        description: '',
        phone: '',
        address: '',
        aa: ''
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
  .slide-fade-enter-active {
    transition: all .8s ease-in-out;
  }
  .slide-fade-leave-active {
    transition: all .8s ease-in-out;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(100px);
    opacity: 0;
  }

  #party__create {
    margin-top: 82px;
    padding: 10px;
    padding-top: 0px;
  }
</style>
