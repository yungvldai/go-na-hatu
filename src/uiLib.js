import Vue from 'vue';
import UiButton from '@/components/ui/UiButton.vue';
import UiIcon from '@/components/ui/UiIcon.vue';
import VueRippler from '@/components/ui/Ripple.js'

Vue.use(VueRippler)
Vue.component('ui-button', UiButton);
Vue.component('ui-icon', UiIcon);
