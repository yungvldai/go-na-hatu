<template>
  <div id="party__list">
    <!-- <transition name="slide-fade">
      <div class="container"> -->
        <div
          class="one__party"
          v-for="(party, index) in partyList"
          :key="`${party.id}@${index}`"
        >
          <div class="address">
            <ui-addr v-ripple :textAddr="party.address || 'Уточните позвонив'" />
          </div>
          <div class="desc">
            {{ party.description || 'Нет описания' }}
          </div>
          <div class="we__have">
            <span class="bold" v-if="party.weHave">У нас есть</span>
            <span class="bold" v-else>У нас ничего нет, но будет весело</span>
            {{ party.weHave }}
          </div>
          <div class="we__want">
            <span class="bold" v-if="party.weWant">От тебя хотим</span>
            <span class="bold" v-else>Ничего не надо, приходи просто так</span>
            {{ party.weWant }}
          </div>
          <div class="icons__block">
            <ui-flex class="icon">
              <div
                class="progress"
                :style="(party.peopleMax && party.peopleNow)
                  ? `width: ${100 / party.peopleMax * party.peopleNow}%`
                  : 'width: 0%;'"
              />
              <ui-icon indent="right" name="people"></ui-icon>
              <span style="z-index: 61;">{{
                `${party.peopleNow || '\u2014'} / ${party.peopleMax || '\u221E'}`
              }}</span>
            </ui-flex>
            <ui-flex class="icon">
              <ui-icon indent="right" color="#0B6114" name="local_atm"></ui-icon>
              <span>{{ party.price || 0 }} ₽</span>
            </ui-flex>
          </div>
          <div class="contact">
            <ui-flex>
              <ui-phone :phone="party.phone"/>
              <span class="org__name">({{ party.orgName || 'Кто-то' }})</span>
            </ui-flex>
          </div>
          <!-- <div class="controls">

          </div> -->
        </div>
      <!-- </div>
    </transition> -->
  </div>
</template>

<script>
  export default {
    mounted() {
      if (!this.userChoice) {
        this.$store.commit('user/setChoice', 'find');
      }
      //TODO 'when api' this.$store.dispatch('party/get');
    },
    computed: {
      partyList() {
        return this.$store.state.party.partyList;
      },
      userChoice() {
        return this.$store.state.user.choice;
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
    transform: translateX(20px);
    opacity: 0;
  }

  #party__list {
    margin-top: 82px;
    .one__party {
      .address {
        margin-bottom: 10px;
      }
      .org__name {
        color: gray;
        font-size: 10pt;
        margin-left: 10px;
      }
      .icons__block {
        .icon {
          width: 35%;
          background-color: rgb(240, 240, 240);
          padding: 10px;
          border: 1px solid $appBorder;
          border-radius: 10px;
          overflow: hidden;
          .progress {
            position: absolute;
            border-radius: 10px 0 0 10px;
            top: 0px;
            left: 0px;
            height: 100%;
            width: 0px;
            background-color: rgba(21, 212, 41, 0.2);
            transition: 1s;
            z-index: 60;
          }
        }
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 16px;
        margin-bottom: 16px;
      }
      .we__have, .we__want, .controls, .contact {
        position: relative;
        margin-top: 10px;
      }
      font-size: 12pt;
      margin: 10px;
      border-radius: 10px;
      margin-top: 0px;
      padding: 14px;
      border: 1px solid $appBorder;
      background-color: white;
    }
  }
</style>
