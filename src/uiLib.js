import Vue from 'vue';
import UiButton from '@/components/ui/UiButton.vue';
import UiIcon from '@/components/ui/UiIcon.vue';
import UiAddr from '@/components/ui/UiAddr.vue';
import UiFlex from '@/components/ui/UiFlex.vue';
import UiPhone from '@/components/ui/UiPhone.vue';
import Ripple from '@/components/ui/Ripple.js'
import '@/components/ui/Ripple.css';

Vue.directive('ripple', Ripple);
Vue.component('ui-button', UiButton);
Vue.component('ui-phone', UiPhone);
Vue.component('ui-addr', UiAddr);
Vue.component('ui-icon', UiIcon);
Vue.component('ui-flex', UiFlex);
