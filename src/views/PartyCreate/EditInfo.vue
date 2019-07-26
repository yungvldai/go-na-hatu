<template>
  <div id="edit__info">
    <div v-if="step === 1">
      <span class="hint">Про тусу</span>
      <ui-text-input
        type="textarea"
        v-model="createData.description"
        placeholder="Описание"
        width="calc(100% - 25px)"
        height="100px"
      />
      <ui-text-input
        type="textarea"
        v-model="createData.weHave"
        placeholder="У нас есть"
        width="calc(100% - 25px)"
        height="100px"
      />
      <ui-text-input
        type="textarea"
        v-model="createData.weWant"
        placeholder="От тебя хотим"
        width="calc(100% - 25px)"
        height="100px"
      />
    </div>
    <div v-if="step === 2">
      <span class="hint">Контакты</span>
      <ui-text-input
        v-model="createData.address"
        placeholder="Адрес текстом"
        width="calc(100% - 25px)"
      />
      <ui-text-input
        v-model="createData.phone"
        placeholder="Телефон"
        width="calc(40% - 25px)"
      />
      <ui-text-input
        v-model="createData.aa"
        placeholder="Адрес текстом"
        width="calc(40% - 25px)"
      />
    </div>

  </div>
</template>

<script>
  export default {
    props: ['createData'],
    data: () => ({
      step: 1
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
    .hint {
      color: $appColor;
      margin-left: 4px;
      margin-bottom: 10px;
      display: block;
    }
  }
</style>
