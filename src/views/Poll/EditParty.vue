<template>
  <div id="edit__party">
    <span class="hint">Внести правки</span>
    <ui-text-input
      type="textarea"
      v-model="editData.description"
      placeholder="Описание"
      width="calc(100% - 25px)"
      height="100px"
    />
    <ui-text-input
      type="textarea"
      v-model="editData.weHave"
      placeholder="У нас есть (оставьте пустым, если ничего нет)"
      width="calc(100% - 25px)"
      height="100px"
    />
    <ui-text-input
      type="textarea"
      v-model="editData.weWant"
      placeholder="От тебя хотим (оставьте пустым, если ничего не хотите)"
      width="calc(100% - 25px)"
      height="100px"
    />
    <ui-text-input
      v-model="editData.peopleNow"
      placeholder="Чел. сейчас"
      width="calc(50% - 28px)"
      style="margin-right: 30px;"
    />
    <ui-text-input
      v-model="editData.peopleMax"
      placeholder="Чел. макс."
      width="calc(50% - 28px)"
    />
    <ui-text-input
      v-model="editData.price"
      placeholder="Вход, ₽"
      width="calc(100% - 25px)"
      style="margin-top: 5px;"
    />
    <span class="hint" style="margin-top: 20px;">Как вас найти</span>
    <ui-text-input
      v-model="editData.address"
      placeholder="Адрес текстом"
      width="calc(100% - 25px)"
    />
    <ui-text-input
      v-model="editData.phone"
      placeholder="Телефон"
      width="calc(50% - 28px)"
      style="margin-right: 30px;"
    />
    <ui-text-input
      v-model="editData.ownerName"
      placeholder="Имя"
      width="calc(50% - 28px)"
      style="margin-top: 5px;"
    />
    <vk-input
      v-model="editData.vkLink"
      width="calc(100%)"
      style="margin-top: 5px; margin-bottom: 10px;"
    />
    <ui-button color="red" width="calc(50% - 30px)" :action="() => $store.commit('user/whatWait', 'wait')">
      <ui-icon indent="right" name="arrow_back" />
      Вернуться
    </ui-button>
    <ui-button color="green" width="calc(50% - 30px)" style="margin-left: 8px;" :action="action">
      <ui-icon indent="right" name="check" />
      Сохранить
    </ui-button>
  </div>
</template>

<script>
  export default {
    props: ['editData', 'action'],
    mounted() {
      Object.keys(this.editData).forEach(x => {
        this.editData[x] = this.ownerParty[x];
      });
    },
    computed: {
      userChoice() {
        return this.$store.state.user.choice;
      },
      ownerParty() {
        return this.$store.state.owner.party;
      }
    }
  }
</script>

<style scoped lang="scss">
  #edit__party {
    .hint {
      color: $appColor;
      margin-left: 4px;
      margin-bottom: 10px;
      display: block;
    }
  }
</style>
