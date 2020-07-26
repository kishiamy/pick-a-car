import { shallowMount } from '@vue/test-utils'
import Make from '@/components/Make.vue'

let wrapper

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: ['A', 'B'] })),
}))

beforeEach(() => {
  wrapper = shallowMount(Make, {
    stubs: {
      Card: true,
      NuxtLink: true,
      EmptyItems: true
    },
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Make', () => {
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  test('renders component classes and data', async () => {
    expect(wrapper.classes('flex-container')).toBe(true)
    expect(wrapper.find('.flex-container').text()).toBe('AB')
  })
})
