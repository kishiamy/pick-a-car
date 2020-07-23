import { shallowMount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

let wrapper

beforeEach(() => {
  wrapper = shallowMount(Card)
})

afterEach(() => {
  wrapper.destroy()
})

describe('Card', () => {
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  test('renders component class', async () => {
    expect(wrapper.classes('card')).toBeTruthy()
  })
})
