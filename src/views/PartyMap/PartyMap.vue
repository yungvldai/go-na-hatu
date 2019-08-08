<template>
  <div id="party__map">
    <div
      id="map"
      class="map__class"
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
  import { api_addr } from '@/services/api.js';

  export default {
    data: () => ({
      mapInstance: null,
      geolocate: null,
      points: []
    }),
    beforeDestroy() {
      this.mapInstance && this.mapInstance.remove();
    },
    mounted() {
      if (this.$store.state.go.party) {
        this.$router.push('/go');
        return;
      }
      this.$store.commit('app/loading', true);
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
        placeholder: 'Поиск',
        marker: false
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
        if (this.$store.state.app.needToLoad) {
          this.geolocate.trigger();
        }
        this.mapInstance.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });
        this.loadPlaces();

        this.mapInstance.on('click', 'points', e => {
          let features = this.mapInstance.queryRenderedFeatures(e.point, { layers: ['points'] });
          var pointId = features[0].properties.id;
          this.$router.push('/party/' + pointId);
        });
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
          data: api_addr + "api/parties/map",
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
              "#00AE00",
              10,
              "#FFD800",
              20,
              "#E80000"
            ],
            "circle-radius": [
              "step",
              ["get", "point_count"],
              20,
              25,
              30,
              50,
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
              25,
              25,
              50,
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
          id: "points",
          type: "symbol",
          source: 'parties',
          filter: ["!", ["has", "point_count"]],
          "layout": {
            "icon-image": "pulsing-dot"
          }
        });
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
          let id = this.$store.state.app.oneId;
          this.mapAddIcon(location, id);
          this.$store.commit('app/loading', false);
          this.mapInstance.flyTo({center: location, zoom: 12});
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
    .map__class {
      width: 100%;
      height: 100%;
    }
  }
</style>
