<template>
  <div id="edit__map">
    <div
      id="edit--map"
      style="width: 100%; height: 100%;"
    />
    <div
      id='geocoder'
      class='geocoder'
    />
  </div>
</template>

<script>
  import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
  import MapboxLanguage from '@mapbox/mapbox-gl-language';
  import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

  export default {
    data: () => ({
      mapInstance: null,
      pos: [0, 0]
    }),
    mounted() {
      if (!this.userChoice) {
        this.$store.commit('user/setChoice', 'create');
      }
      mapboxgl.accessToken = 'pk.eyJ1IjoieXVuZ3ZsZGFpIiwiYSI6ImNqeThkbWg2OTAzYnEzZHBud2wyZW9tYmsifQ.XpqSXSU5y7PW60b0TAQb9w';
      this.mapInstance = new mapboxgl.Map({
        container: 'edit--map',
        style: 'mapbox://styles/mapbox/streets-v10',
        center: this.pos,
        zoom: 1
      });
      let geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        language: 'ru-RU',
        placeholder: 'Поиск'
      });
      document.getElementById('geocoder').appendChild(geocoder.onAdd(this.mapInstance));
      let language = new MapboxLanguage();
      this.mapInstance.addControl(language);
      this.mapInstance.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      }), 'bottom-right');
    },
    beforeDestroy() {
      this.mapInstance.remove();
    },
    computed: {
      userChoice() {
        return this.$store.state.user.choice;
      }
    }
  }
</script>

<style scoped lang="scss">
  #edit__map {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
  }
</style>
