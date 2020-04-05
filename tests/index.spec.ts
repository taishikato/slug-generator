import Index from '../'
import { v4 as uuidv4 } from 'uuid'
import { mocked } from 'ts-jest/utils'
jest.mock('uuid')

test('Return an empty string when passed an empty string', () => {
  const target = ''
  const expected = ''
  expect(Index(target)).toBe(expected)
})

test('Delete emojis and return a slug', () => {
  const target = 'blog title 🙏(March 1st)😼'
  const expected = 'blog-title-march-1st'
  expect(Index(target)).toBe(expected)
})

test('Delete spaces before and after the text', () => {
  const target = '    blog title (March 1st)   '
  const expected = 'blog-title-march-1st'
  expect(Index(target)).toBe(expected)
})

test('Delete special characters', () => {
  const target = 'blog &title© (March 1st)&amp;'
  const expected = 'blog-title-march-1st-amp'
  expect(Index(target)).toBe(expected)
})

test('Generate a slug with UUID', () => {
  // Set a return value of the mock for uuidv4
  mocked(uuidv4).mockReturnValueOnce('suffix')
  const target = 'blog title (March 1st)'
  const expected = 'blog-title-march-1st-suffix'
  expect(Index(target, true)).toMatch(expected)
})
