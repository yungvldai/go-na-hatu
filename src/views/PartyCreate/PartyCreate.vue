<template>
  <div id="party__create">
    <transition name="slide-fade">
      <EditMap v-if="whatEdit === 'map'" :data="geoData" />
    </transition>
    <transition name="slide-fade">
      <EditInfo v-if="whatEdit === 'info'" :createData="createData" :action="createParty" />
    </transition>
  </div>
</template>

<script>
  import EditInfo from './EditInfo.vue';
  import EditMap from './EditMap.vue'

  import { api } from '@/services/api.js';

  export default {
    components: {
      EditMap,
      EditInfo
    },
    methods: {
      createParty() {
        let form = this.createData;
        form.weWant = form.weWant.trim();
        form.weHave = form.weHave.trim();
        form.description = form.description.trim();
        form.phone = form.phone.trim();
        form.address = form.address.trim();
        form.ownerName = form.ownerName.trim();
        form.location = [this.geoData.location.lng, this.geoData.location.lat];

        this.$store.commit('app/loading', true);
        api.post('api/parties/newParty', form)
        .then(response => {
          this.$store.commit('owner/party', response.data.party);
          localStorage.setItem('party--id', response.data.party.id);
          localStorage.setItem('private--key', response.data.userKey);
          this.$router.push('/poll');
          this.$store.commit('app/loading', false);
        })
        .catch(() => {
          this.$store.dispatch('app/snackOpen', 'Ошибка создания тусы');
          this.$store.commit('app/loading', false);
        });

      }
    },
    data: () => ({
      geoData: {
        location: [-1, -1]
      },
      createData: {
        weWant: '',
        weHave: '',
        description: '',
        phone: '',
        address: '',
        ownerName: '',
        price: null,
        peopleNow: null,
        peopleMax: null,
        vkLink: ''
      }
    }),
    mounted() {
      if (this.$store.state.go.party) {
        this.$router.push('/go');
        return;
      }
      if (!this.userChoice) {
        this.$store.commit('user/setChoice', 'create');
      }
    },
    computed: {
      userChoice() {
        return this.$store.state.user.choice;
      },
      whatEdit() {
        return this.$store.state.user.whatEdit;
      }
    }
  }
</script>

<style scoped lang="scss">
  .slide-fade-enter-active {
    transition: all .8s ease-in-out;
  }
  .slide-fade-leave-active {
    transition: all .8s ease-in-out;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(100px);
    opacity: 0;
  }

  #party__create {
    margin-top: 82px;
    padding: 10px;
    padding-top: 0px;
  }
</style>
