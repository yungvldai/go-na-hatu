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
      pos: [55.76, 37.64]
    }),
    mounted() {
      if (!this.userChoice) {
        this.$store.commit('user/setChoice', 'find');
      }
      //TODO 'when api' this.$store.dispatch('party/get');
      mapboxgl.accessToken = 'pk.eyJ1IjoieXVuZ3ZsZGFpIiwiYSI6ImNqeThkbWg2OTAzYnEzZHBud2wyZW9tYmsifQ.XpqSXSU5y7PW60b0TAQb9w';
      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v10',
        center: [37.64, 55.76],
        zoom: 13
      });
      var geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        language: 'ru-RU',
        placeholder: 'Поиск'
      });
      document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
      var language = new MapboxLanguage();
      map.addControl(language);
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
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
  }
</style>
