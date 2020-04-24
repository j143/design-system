import { callAll } from '../callAll.js'

test('callAll()', () => {
  const expected = 'string'
  const firstSpy = jest.fn()
  const secondSpy = jest.fn()
  callAll(firstSpy, secondSpy)(expected)
  expect(firstSpy).toHaveBeenCalledWith(expected)
  expect(secondSpy).toHaveBeenCalledWith(expected)
})
