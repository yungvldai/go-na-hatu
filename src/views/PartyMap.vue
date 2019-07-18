<template>
  <div id="party__map">
    <div
      id="map"
      style="width: 100%; height: 100%;"
    />
    <div
      id='geocoder'
      class='geocoder'
    />
  </div>
</template>

<script>

  import axios from 'axios';
  import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

  export default {
    data: () => ({
      mapInstance: null,
      pos: [37, 55]
    }),
    mounted() {
      if (!this.userChoice) {
        this.$store.commit('user/setChoice', 'find');
      }
      this.getLocation();
      //TODO 'when api' this.$store.dispatch('party/get');
      mapboxgl.accessToken = 'pk.eyJ1IjoieXVuZ3ZsZGFpIiwiYSI6ImNqeThkbWg2OTAzYnEzZHBud2wyZW9tYmsifQ.XpqSXSU5y7PW60b0TAQb9w';
      this.mapInstance = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v10',
        center: this.pos,
        zoom: 10
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
    computed: {
      userChoice() {
        return this.$store.state.user.choice;
      }
    },
    methods: {

      getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            this.pos = [position.coords.longitude, position.coords.latitude];
          });
        } else {
          this.pos = [55.76, 37.64];
          //TODO errors
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  #party__map {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
  }
</style>
