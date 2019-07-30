import { mount } from '@vue/test-utils'
import Component from '../components/ui/VkInput.vue'

describe('Component', () => {
  test('является экземпляром Vue', () => {
    const wrapper = mount(Component)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
