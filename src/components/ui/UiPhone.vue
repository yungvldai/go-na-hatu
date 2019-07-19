<template>
  <div class="ui__phone">
    <i class="material-icons" style="margin-right: 5px;" @click="show = true">
      phone
    </i>
    <span class="show__phone" v-if="!show" @click="show = true">Показать</span>
    <transition name="slide-fade">
      <a class="phone__link" :href="`tel:${phone}`" v-if="show">{{ phone }}</a>
    </transition>
  </div>
</template>

<script>
  export default {
    data: () => ({
      show: false
    }),
    props: {
      phone: String,
      coords: Array
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
    transform: translateX(-10px);
    opacity: 0;
  }

  .show__phone {
    text-decoration: underline;
    font-weight: bold;
  }

  .phone__link {
    font-weight: bold;
    color: $appColor;
  }

  .ui__phone {
    color: $appColor;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
</style>
