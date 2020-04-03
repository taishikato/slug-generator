import Index from '../'

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
  const target = 'blog title (March 1st)'
  const expected = /blog-title-march-1st-.*/
  expect(Index(target, true)).toMatch(expected)
})
