import { helloWord } from '../src'

describe('test index', () => {
  test('helloWord', () => {
    expect(helloWord()).toBe('hello-word')
  })
})
