<template>
  <div id="edit__map">
    <div id="edit--map" style="width: 100%; height: 100%;" />
    <div id="geocoder" class="geocoder" />
    <div id="map__pointer" :style="ptrStyles" />
    <div id="pointer__shadow" :style="ptrShadow" />
    <div id="info__box">
      <span class="hint">Где это будет?</span>
    </div>
    <div id="next__button" v-ripple @click="goEditInfo">
      <ui-icon name="arrow_forward_ios" color="#4A235A" style="margin-left: 4px;" />
    </div>
  </div>
</template>

<script>
  import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
  import MapboxLanguage from '@mapbox/mapbox-gl-language';
  import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

  export default {
    props: ['data'],
    data: () => ({
      mapInstance: null,
      geolocate: null,
      fingerOnScreen: false,
      mapSelector: null
    }),
    computed: {
      ptrStyles() {
        return this.fingerOnScreen ?
        {
          top: 'calc(50% - 60px)',
          left: 'calc(50% - 15px)'
        } : {
          top: 'calc(50% - 45px)',
          left: 'calc(50% - 15px)'
        };
      },
      ptrShadow() {
        return this.fingerOnScreen ?
        {
          width: '30px',
          height: '11px',
          top: 'calc(50% - 5px)',
          left: 'calc(50% - 15px)'
        } : {
          width: '6px',
          height: '2px',
          top: 'calc(50% - 1px)',
          left: 'calc(50% - 3px)'
        };
      },
      locationIsNotSet() {
        return this.data.location[0] === -1 && this.data.location[1] === -1;
      }
    },
    methods: {
      goEditInfo() {
        this.data.location = this.mapInstance.getCenter();
        setTimeout(() => this.$store.commit('user/whatEdit', 'info'), 200);
      },
      setFingerOn() {
        this.fingerOnScreen = true;
      },
      unsetFingerOn() {
        this.fingerOnScreen = false;
        this.data.location = this.mapInstance.getCenter();
      }
    },
    mounted() {
      this.$store.commit('user/setChoice', 'create');
      this.mapSelector = document.getElementById('edit--map');
      this.mapSelector.addEventListener('touchstart', this.setFingerOn);
      this.mapSelector.addEventListener('touchend', this.unsetFingerOn)
      mapboxgl.accessToken = 'pk.eyJ1IjoieXVuZ3ZsZGFpIiwiYSI6ImNqeThkbWg2OTAzYnEzZHBud2wyZW9tYmsifQ.XpqSXSU5y7PW60b0TAQb9w';
      let mapObj = {
        container: 'edit--map',
        style: 'mapbox://styles/mapbox/streets-v10',
        zoom: 1
      };
      if (!this.locationIsNotSet) {
        mapObj.zoom = 16;
        mapObj.center = this.data.location;
      }
      this.mapInstance = new mapboxgl.Map(mapObj);
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
      this.mapInstance.on('load', () => {
        if (this.locationIsNotSet) {
          this.geolocate.trigger();
          this.data.location = this.mapInstance.getCenter();
        }
      });
    },
    destroyed() {
      this.mapSelector.removeEventListener('touchstart', this.setFingerOn);
      this.mapSelector.removeEventListener('touchend', this.unsetFingerOn);
    },
    beforeDestroy() {
      this.mapInstance.remove();
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
    #info__box {
      .hint {
        color: $appColor;
      }
      position: fixed;
      left: 0px;
      bottom: calc(50% - 30px);
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    #map__pointer {
      background-image: url('/pointer.png');
      background-size: cover;
      position: fixed;
      width: 30px;
      height: 45px;
      transition: .4s;
      transition-timing-function: ease-in-out;
      z-index: 80;
    }
    #pointer__shadow {
      background-size: cover;
      position: fixed;
      transition: .4s;
      transition-timing-function: ease-in-out;
      background-image: url('/ptrshadow.png');
      z-index: 79;
    }
    #next__button {
      border-radius: 50%;
      background-color: white;
      position: fixed;
      right: calc(50% - 30px);
      bottom: 30px;
      width: 60px;
      height: 60px;
      box-shadow: 7px 7px 20px -9px rgba(0,0,0,0.75);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
