<template>
  <div id="main__view">
    <ui-button color="green" :action="goFind">
      <ui-icon name="add" indent="right" />
      Find party
    </ui-button>

    <ui-button color="orange" :action="goCreate">
      <ui-icon name="add" indent="right" />
      Organize
    </ui-button>
  </div>
</template>

<script>
  export default {
    methods: {
      goFind() {
        this.$store.commit('user/setChoice', 'find');
        this.$router.push('/list');
      },
      goCreate() {
        this.$store.commit('user/setChoice', 'create');
        this.$router.push('/create');
      }
    }
  }
</script>

<style scoped>
  #main__view {
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
