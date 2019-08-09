import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import App from '../App.vue';
import Ripple from '@/components/ui/Ripple.js'
import pretty from '@/mixins/pretty.js'

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.directive('ripple', Ripple);

describe('App', () => {

  let store, state, mutations;

  mutations = {
    'app/loadOnlyOneLocation': jest.fn(),
    'app/loadAllLocations': jest.fn(),
    'app/loading': jest.fn(),
    'app/setMobile': jest.fn(),
    'owner/party': jest.fn(),
    'owner/delete': jest.fn(),
    'user/confirmSet': jest.fn(),
    'user/saveScroll': jest.fn(),
    'user/setChoice': jest.fn(),
    'user/whatEdit': jest.fn()
  };

  state = {
    app: {
      loading: false,
      needToLoad: true,
      oneLocation: [0, 0],
      oneId: null,
      isMobile: false
    },
    owner: {
      party: null
    },
    user: {
      choice: 'wait',
      whatEdit: 'map',
      scroll: {x: 0, y: 0},
      confirm: false
    }
  };

  store = new Vuex.Store({
    state,
    mutations
  });

  it('test wait', () => {
    const wrapper = mount(App, { store, localVue })
    expect(wrapper.isVueInstance());
  });

  state.user.choice = 'find';
  store = new Vuex.Store({
    state,
    mutations
  });

  it('test find', () => {
    const wrapper = mount(App, { store, localVue })
    expect(wrapper.isVueInstance());
  });

  state.user.choice = 'create';
  store = new Vuex.Store({
    state,
    mutations
  });

  it('test create', () => {
    const wrapper = mount(App, { store, localVue })
    expect(wrapper.isVueInstance());
  });
});

describe('niceDate', () => {
  it('Date today', () => {
    expect(pretty.methods.niceDate(new Date())).toBe('Сегодня,');
  });

  it('Date 1564570133', () => {
    expect(pretty.methods.niceDate(1564570133)).toBe('19.01.1970');
  });

});
