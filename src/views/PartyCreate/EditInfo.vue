<template>
  <div id="edit__info">
    <ui-text-input
      type="textarea"
      v-model="createData.description"
      placeholder="Описание"
      width="calc(100% - 25px)"
    />
    <ui-text-input
      type="textarea"
      v-model="createData.weHave"
      placeholder="У нас есть"
      width="calc(100% - 25px)"
    />
    <ui-text-input
      type="textarea"
      v-model="createData.weWant"
      placeholder="От тебя хотим"
      width="calc(100% - 25px)"
    />
  </div>
</template>

<script>
  export default {
    props: ['createData'],
    data: () => ({
    }),
    mounted() {
      if (!this.userChoice) {
        this.$store.commit('user/setChoice', 'create');
      }
    },
    computed: {
      userChoice() {
        return this.$store.state.user.choice;
      }
    }
  }
</script>

<style scoped lang="scss">
  #edit__info {
  }
</style>
