import Vue from 'vue';
import UiButton from '@/components/ui/UiButton.vue';
import UiIcon from '@/components/ui/UiIcon.vue';
import UiAddr from '@/components/ui/UiAddr.vue';
import UiFlex from '@/components/ui/UiFlex.vue';
import UiPhone from '@/components/ui/UiPhone.vue';
import UiProgressDiv from '@/components/ui/UiProgressDiv.vue';
import UiAdvMenu from '@/components/ui/UiAdvMenu.vue';
import UiTextInput from '@/components/ui/UiTextInput.vue';
import Ripple from '@/components/ui/Ripple.js'
import '@/components/ui/Ripple.css';

Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
});

Vue.directive('ripple', Ripple);
Vue.component('ui-adv-menu', UiAdvMenu);
Vue.component('ui-text-input', UiTextInput);
Vue.component('ui-prog-div', UiProgressDiv);
Vue.component('ui-button', UiButton);
Vue.component('ui-phone', UiPhone);
Vue.component('ui-addr', UiAddr);
Vue.component('ui-icon', UiIcon);
Vue.component('ui-flex', UiFlex);
