<template>
  <div id="party__map">
    <div id="map" style="width: 100%; height: 100%;"></div>

  </div>
</template>

<script>
  export default {
    data: () => ({
      mapInstance: null,
      pos: [55.76, 37.64]
    }),
    mounted() {
      if (!this.userChoice) {
        this.$store.commit('user/setChoice', 'find');
      }
      //TODO 'when api' this.$store.dispatch('party/get');
    },
    created() {
      this.getLocation();
      ymaps.ready(() => {
        this.mapInstance = new window.ymaps.Map("map", {
          center: this.pos,
          zoom: 7
        });
        console.log(this.mapInstance);
      });
    },
    computed: {
      userChoice() {
        return this.$store.state.user.choice;
      }
    },
    methods: {
      getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            this.pos = [position.coords.latitude, position.coords.longitude];
          });
        } else {
          this.pos = [55.76, 37.64];
          //TODO errors
        }
      }
    }
  }
</script>

<style scoped>
  #party__map {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: gray;
  }
</style>
