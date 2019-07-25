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
  import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
  import MapboxLanguage from '@mapbox/mapbox-gl-language';
  import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
  import { pulsingDot, registerMapInstance } from './pulsingDot.js';

  export default {
    data: () => ({
      mapInstance: null,
      geolocate: null,
      points: []
    }),
    beforeDestroy() {
      this.mapInstance.remove();
    },
    mounted() {
      this.$store.commit('app/loading', true);
      if (!this.userChoice) {
        this.$store.commit('user/setChoice', 'find');
      }
      mapboxgl.accessToken = 'pk.eyJ1IjoieXVuZ3ZsZGFpIiwiYSI6ImNqeThkbWg2OTAzYnEzZHBud2wyZW9tYmsifQ.XpqSXSU5y7PW60b0TAQb9w';
      this.mapInstance = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v10',
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
      this.geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      });
      this.mapInstance.addControl(this.geolocate, 'bottom-right');
      registerMapInstance(this.mapInstance);

      let context = this;
      this.mapInstance.on('click', function(e) {
        let lng = e.lngLat.lng;
        let lat = e.lngLat.lat;
        context.points.forEach(x => {
          if (Math.abs(lng - x[0]) < 0.02 && Math.abs(lat - x[1]) < 0.02) {
            context.$router.push('/list');
          }
        });
      });
      this.mapInstance.on('load', () => {
        this.geolocate.trigger();
        this.mapInstance.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });
        this.loadPlaces();
      });


    },
    computed: {
      userChoice() {
        return this.$store.state.user.choice;
      }
    },
    methods: {
      mapAddAllParties() {
        this.mapInstance.addSource("parties", {
          type: "geojson",
          data: "https://gonahatu.herokuapp.com/api/parties/map",
          cluster: true,
          clusterMaxZoom: 12,
          clusterRadius: 50
        });

        this.mapInstance.addLayer({
          id: "clusters",
          type: "circle",
          source: 'parties',
          filter: ["has", "point_count"],
          paint:
          {
            "circle-color": [
              "step",
              ["get", "point_count"],
              "#DF7BEB",
              10,
              "#B233C1",
              20,
              "#4A235A"
            ],
            "circle-radius": [
              "step",
              ["get", "point_count"],
              20,
              100,
              30,
              750,
              40
            ]
          }
        });

        this.mapInstance.addLayer({
          id: "clusters_in",
          type: "circle",
          source: 'parties',
          filter: ["has", "point_count"],
          paint:
          {
            "circle-color": [
              "step",
              ["get", "point_count"],
              "#FFFFFF",
              10,
              "#FFFFFF",
              20,
              "#FFFFFF"
            ],
            "circle-radius": [
              "step",
              ["get", "point_count"],
              15,
              100,
              25,
              750,
              35
            ]
          }
        });

        this.mapInstance.addLayer({
          id: "cluster-count",
          type: "symbol",
          source: 'parties',
          filter: ["has", "point_count"],
          layout:
          {
            "text-field": "{point_count_abbreviated}",
            "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
            "text-size": 16
          }
        });

        this.mapInstance.addLayer({
          id: "unclustered-point",
          type: "symbol",
          source: 'parties',
          filter: ["!", ["has", "point_count"]],
          "layout": {
            "icon-image": "pulsing-dot"
          }
        });
      },

      mapAddIcon(coords) {
        this.points.push(coords);
        this.mapInstance.addLayer({
          "id": "points",
          "type": "symbol",
          "source": {
            "type": "geojson",
            "data": {
              "type": "FeatureCollection",
              "features": [{
                "type": "Feature",
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
      },

      loadPlaces() {
        this.points = [];
        if (this.$store.state.app.needToLoad) {
          this.$store.dispatch('party/get', () => {
            this.mapAddAllParties();
            this.$store.commit('app/loading', false);
          });
        } else {
          let location = this.$store.state.app.oneLocation;
          this.mapAddIcon(location);
          this.$store.commit('app/loading', false);
          this.mapInstance.flyTo({center: location, zoom: 9});
        }
        this.$store.commit('app/loadAllLocations');
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
