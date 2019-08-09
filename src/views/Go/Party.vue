<template>
  <div>
    <div class="one__party">
      <div class="top__block">
        <div class="address__container">
          <ui-addr v-ripple :id="party.id" :coords="party.location" :textAddr="party.address || 'Показать на карте'" :customMethod="triggerOnMap" />
        </div>
        <div class="options">
          <ui-adv-menu :item="party" />
        </div>
      </div>
      <div class="date">
        {{ niceDate(party.publicationDate) + ' ' + niceTime(party.publicationDate) }}
      </div>
      <div class="spacer" />
      <div class="desc">
        {{ party.description || 'Нет описания' }}
      </div>
      <div class="we__have">
        <span class="bold" style="color: #1B4F72;" v-if="party.weHave">У нас есть</span>
        <span class="bold" style="color: #1B4F72;" v-else>У нас ничего нет, но будет весело</span>
        {{ party.weHave }}
      </div>
      <div class="we__want">
        <span class="bold" style="color: #641E16;" v-if="party.weWant">От тебя хотим</span>
        <span class="bold" style="color: #641E16;" v-else>Ничего не надо, приходи просто так</span>
        {{ party.weWant }}
      </div>
      <div class="spacer" />
      <div class="icons__block">
        <ui-flex class="icon">
          <ui-prog-div :value="(party.peopleMax && party.peopleNow) ? 100 / party.peopleMax * party.peopleNow : 0" />
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
          <span class="org__name">({{ party.ownerName || 'Кто-то' }})</span>
          <div v-if="party.vkLink">
            <a :href="'https://vk.com/' + party.vkLink" target="_blank">
              <img src="/vklogo.png" style="vertical-align: -5px; margin-left: 10px; width: 25px;" />
            </a>
          </div>
        </ui-flex>
      </div>
    </div>
  </div>
</template>

<script>
  import pretty from '@/mixins/pretty.js';

  export default {
    mixins: [pretty],
    props: ['partyOrNull', 'triggerOnMap'],
    computed: {
      party() {
        return this.partyOrNull || {};
      }
    }
  }
</script>

<style scoped lang="scss">
  .white__block {
    font-size: 12pt;
    margin: 10px;
    border-radius: 10px;
    margin-top: 0px;
    padding: 14px;
    box-shadow: 7px 7px 20px -16px rgba(0,0,0,0.75);
    background-color: white;
  }
  .one__party {
    .top__block {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .options {
        color: #BFBFBF;
        width: 25px;
        position: relative;
        &:active {
          color: black;
        }
      }
      .address__container {
        width: calc(100% - 30px);
      }
    }
    .org__name {
      color: gray;
      font-size: 10pt;
      margin-left: 10px;
    }
    .spacer {
      width: 100%;
      background-color: $appBorder;
      height: 1px;
      margin: 10px;
      margin-left: 0px;
      margin-right: 0px;
    }
    .icons__block {
      .icon {
        width: 35%;
        background-color: rgb(240, 240, 240);
        padding: 10px;
        border: 1px solid $appBorder;
        border-radius: 10px;
        overflow: hidden;
      }
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: 16px;
      margin-bottom: 16px;
    }
    .desc {
      color: black;
      overflow-x: hidden;
    }
    .date {
      color: grey;
      font-size: 10pt;
      margin-bottom: 4px;
    }
    .we__have, .we__want, .controls, .contact, .actions {
      position: relative;
      margin-top: 10px;
      overflow-x: hidden;
    }
    font-size: 12pt;
    margin-top: 10px;
    padding: 14px;
    background-color: white;
  }
</style>
