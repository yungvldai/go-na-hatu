import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import App from '../App.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('App.vue', () => {
  let state;
  let store;

  beforeEach(() => {
    state = {
      app: {
        loading: true
      }
    }
    store = new Vuex.Store({
      state
    });
  })

  it('is it Vue instance ?', () => {
    const wrapper = shallowMount(App, { store, localVue })
    expect(wrapper.isVueInstance());
  });
});
