import { shallowMount } from '@vue/test-utils'
import Vehicle from '@/components/Vehicle.vue'

let wrapper
let $route = { query: {} }

jest.mock('axios', () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: {
        make: 'FORD',
        model: 'Fiesta',
        enginePowerPS: 60,
        enginePowerKW: 44,
        fuelType: 'Benzin',
        bodyType: 'Limousine',
        engineCapacity: 1299,
      },
    })
  ),
}))

beforeEach(() => {
  wrapper = shallowMount(Vehicle, {
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

describe('Vehicle', () => {
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  test('renders component classes and data', async () => {
    expect(wrapper.classes('flex-container')).toBe(true)
  })
})
