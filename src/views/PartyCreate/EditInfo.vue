<template>
  <div id="edit__info">
    <span class="hint">Напишите про тусу</span>
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
    <ui-text-input
      v-model="createData.peopleNow"
      placeholder="Чел. сейчас"
      width="calc(50% - 28px)"
      style="margin-right: 30px;"
    />
    <ui-text-input
      v-model="createData.peopleMax"
      placeholder="Чел. макс."
      width="calc(50% - 28px)"
    />
    <ui-text-input
      v-model="createData.price"
      placeholder="Вход, ₽"
      width="calc(100% - 25px)"
      style="margin-top: 5px;"
    />
    <span class="hint" style="margin-top: 20px;">Как вас найти</span>
    <ui-text-input
      v-model="createData.address"
      placeholder="Адрес текстом"
      width="calc(100% - 25px)"
    />
    <ui-text-input
      v-model="createData.phone"
      placeholder="Телефон"
      width="calc(50% - 28px)"
      style="margin-right: 30px;"
    />
    <ui-text-input
      v-model="createData.ownerName"
      placeholder="Имя"
      width="calc(50% - 28px)"
      style="margin-top: 5px;"
    />
    <vk-input
      v-model="createData.vkLink"
      width="calc(100%)"
      style="margin-top: 5px; margin-bottom: 10px;"
    />
    <ui-button color="#4A235A" width="calc(100% - 28px)" :action="action">
      <ui-icon indent="right" name="add_to_photos" />
      Создать
    </ui-button>
  </div>
</template>

<script>
  export default {
    props: ['createData', 'action'],
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
    .hint {
      color: $appColor;
      margin-left: 4px;
      margin-bottom: 10px;
      display: block;
    }
  }
</style>
