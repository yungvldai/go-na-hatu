<template>
  <div id="go__container">
    <div id="go__map">
      <div
        id="go--map"
        style="width: 100%; height: 100%;"
      />
    </div>
    <div id="go__party">
      <one-party :partyOrNull="goParty" :triggerOnMap="triggerOnMap" />
    </div>
  </div>
</template>

<script>
  import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
  import MapboxLanguage from '@mapbox/mapbox-gl-language';
  import { pulsingDot, registerMapInstance } from '../PartyMap/pulsingDot.js';
  import OneParty from './Party.vue';

  export default {
    props: ['data'],
    data: () => ({
      mapInstance: null,
      geolocate: null
    }),
    components: {
      OneParty
    },
    computed: {
      userChoice() {
        return this.$store.state.user.choice;
      },
      goParty() {
        return this.$store.state.go.party;
      }
    },
    mounted() {
      if (this.userChoice !== 'go') {
        this.$store.commit('user/setChoice', 'go');
      }
      if (!this.goParty) {

        this.$router.push('/');
        return;
      }
      this.$store.commit('app/loading', true);
      mapboxgl.accessToken = 'pk.eyJ1IjoieXVuZ3ZsZGFpIiwiYSI6ImNqeThkbWg2OTAzYnEzZHBud2wyZW9tYmsifQ.XpqSXSU5y7PW60b0TAQb9w';
      let mapObj = {
        container: 'go--map',
        style: 'mapbox://styles/mapbox/streets-v10',
        zoom: 1
      };
      this.mapInstance = new mapboxgl.Map(mapObj);

      let language = new MapboxLanguage();
      this.mapInstance.addControl(language);
      this.geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      });
      this.mapInstance.addControl(this.geolocate, 'bottom-right');
      registerMapInstance(this.mapInstance);


      this.mapInstance.on('load', () => {
        this.mapInstance.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });
        //this.geolocate.trigger();

        this.mapAddIcon(this.goParty.location, this.goParty.id);
        this.$store.commit('app/loading', false);
        this.mapInstance.flyTo({center: this.goParty.location, zoom: 12});

      });
    },
    beforeDestroy() {
      this.mapInstance && this.mapInstance.remove();
    },
    methods: {
      triggerOnMap() {
        this.mapInstance.flyTo({center: this.goParty.location, zoom: 12});
      },
      mapAddIcon(coords, id) {
        this.mapInstance.addLayer({
          "id": "points",
          "type": "symbol",
          "source": {
            "type": "geojson",
            "data": {
              "type": "FeatureCollection",
              "features": [{
                "type": "Feature",
                "properties": {
                  "id": id
                },
                "geometry": {
                  "type": "Point",
                  "coordinates": coords
                }
              }]
            }
          },
          "layout": {
            "icon-image": "pulsing-dot"
          }
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  #go__container {
    #go__party {
      position: fixed;
      left: 0px;
      top: 60%;
      width: 100%;
      height: 40%;
      overflow-y: scroll;
    }
    #go__map {
      position: fixed;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 60%;
    }
  }

</style>
