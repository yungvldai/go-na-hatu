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

  export default {
    data: () => ({
      mapInstance: null,
      pos: [0, 0],
      points: []
    }),
    beforeDestroy() {
      this.mapInstance.remove();
    },
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
      this.loadPlaces();
    },
    computed: {
      userChoice() {
        return this.$store.state.user.choice;
      }
    },
    methods: {
      mapAddIcon(coords) {
        this.points.push(coords);
        const size = 110;
        let thatMap = this.mapInstance;
        const pulsingDot = {
          width: size,
          height: size,
          data: new Uint8Array(size * size * 4),
          onAdd: function() {
            let canvas = document.createElement('canvas');
            canvas.width = this.width;
            canvas.height = this.height;
            this.context = canvas.getContext('2d');
          },
          render: function() {
            let duration = 1000;
            let t = (performance.now() % duration) / duration;
            let radius = size / 2 * 0.3;
            let outerRadius = size / 2 * 0.7 * t + radius;
            let context = this.context;
            context.clearRect(0, 0, this.width, this.height);
            context.beginPath();
            context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
            context.fillStyle = 'rgba(74, 35, 90,' + (1 - t) + ')';
            context.fill();
            context.beginPath();
            context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
            context.fillStyle = 'rgba(74, 35, 90, 1)';
            context.strokeStyle = 'white';
            context.lineWidth = 2 + 4 * (1 - t);
            context.fill();
            context.stroke();
            this.data = context.getImageData(0, 0, this.width, this.height).data;
            thatMap.triggerRepaint();
            return true;
          }
        };
        this.mapInstance.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });
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
          //TODO Load
        } else {
          let location = this.$store.state.app.oneLocation;
          this.mapInstance.on('load', () => {
            this.mapAddIcon(location);
            this.mapInstance.flyTo({center: location, zoom: 9});
          });
        }
        this.$store.commit('app/loadAllLocations');

      },
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
