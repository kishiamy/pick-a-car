import { mount } from '@vue/test-utils'
import EmptyItems from '@/components/EmptyItems.vue'

let wrapper

beforeEach(() => {
  wrapper = mount(EmptyItems, {
    propsData: {
      item: 'foo',
    },
    stubs: {
      NuxtLink: true,
    },
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('EmptyItems', () => {
  it('should render correct contents', () => {
    expect(wrapper.find('.no-results h1').text()).toBe('No foo available')
    expect(wrapper.find('.no-link-styles').text()).toBe('Back to Home page')
  })
})
