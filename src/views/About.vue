<template>
  <div id="about__page">
    <p>
      🤟 Web-приложение для поиска вечеринок и новых друзей "ГО НА ХАТУ".
    </p>
    <p>
      🔥 Если Вы хотите найти комапнию нажмите кнопку "Найти", если же Вы распологаете квартирой <strike>и готовы ее разнести</strike> и хотите затусить, нажмите "Организовать".
    </p>
    <p>
      🔍 Вы можете найти тусу как с помощью карты, так и с помощью списка, где Вам доступны фильтры и поиск. Для лучшего опыта советуем Вам включить определение геопозиции.
    </p>
    <p>
      🏠 Если же Вы решили создать тусу, то все так же просто. Укажите место, заполните как можно больше полей и просто ждите. Правило "чем больше полей заполнено, тем круче туса" здесь как нигде больше работает.
    </p>
    <ui-button color="#4A235A" width="calc(100% - 28px)" :action="go">
      <ui-icon indent="right" name="thumb_up_alt" />
      Понял, погнали
    </ui-button>
    <div class="legends">
      <span>© Иванов Влад, Сафонов Максим, 2019</span>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$store.commit('user/setChoice', null);
    },
    methods: {
      go() {
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped lang="scss">
  #about__page {
    margin-top: 0px;
    padding-left: 20px;
    padding-right: 20px;
    color: $appColor;
    .legends {
      width: 100%;
      margin-top: 40px;
      margin-bottom: 40px;
      font-size: 10pt;
      text-align: center;
      color: grey !important;
    }
  }
</style>
