<template>
  <div class="ui__addr" @click="goMapOneLoc">
    <i class="material-icons" style="margin-right: 2px;">
      location_on
    </i>
    <span class="addr__text">
      {{ textAddr }}
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      textAddr: String,
      coords: Array,
      id: Number
    },
    methods: {
      goMapOneLoc() {
        if (this.coords && this.coords instanceof Array && this.coords.length === 2) {
          this.$store.commit('app/loadOnlyOneLocation', {location: this.coords, id: this.id});
          this.$router.push('/map');
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .ui__addr {
    .addr__text {
      text-decoration: underline;
    }
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #1C9471;
    font-weight: bold;
    border-radius: 5px;
    position: relative;
  }
</style>
