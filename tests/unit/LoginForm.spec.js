import LoginForm from '@/components/LoginForm.vue'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  test('Emits an event with a data user payload', () => {
    const wrapper = mount(LoginForm)
    // 1. Find text input
    const input = wrapper.find('input[data-testid="name-input"]')

    // 2. Set value for text input
    input.setValue('Jack Sparrow')

    // 3. Simulate form submission
    wrapper.trigger('submit')

    // 4. Assert event has been submitted
    // return a list of events triggered
    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    // expect results (array) to have length of 1
    expect(formSubmittedCalls).toHaveLength(1)

    // 5. Assert payload is correct
    const expectedPayload = { name: 'Jack Sparrow' }
    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(
      expectedPayload
    )
  })
})
