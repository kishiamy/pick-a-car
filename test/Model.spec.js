import { shallowMount } from '@vue/test-utils'
import Model from '@/components/Model.vue'

let wrapper
let $route = { query: {} }

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: ['C', 'D'] })),
}))

beforeEach(() => {
  wrapper = shallowMount(Model, {
    mocks: {
      $route,
    },
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

describe('Model', () => {
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  test('renders component data', async () => {
    expect(wrapper.find('.flex-container').text()).toBe('CD')
  })

  test('test router mock', () => {
    expect(wrapper.vm.$route.path).toBe($route.path)
  })
})
