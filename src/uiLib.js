import Vue from 'vue';
import UiButton from '@/components/ui/UiButton.vue';
import UiIcon from '@/components/ui/UiIcon.vue';
import UiAddr from '@/components/ui/UiAddr.vue';
import UiFlex from '@/components/ui/UiFlex.vue';
import VueRippler from '@/components/ui/Ripple.js'

Vue.use(VueRippler)
Vue.component('ui-button', UiButton);
Vue.component('ui-addr', UiAddr);
Vue.component('ui-icon', UiIcon);
Vue.component('ui-flex', UiFlex);
