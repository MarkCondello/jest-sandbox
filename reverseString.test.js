import { reverseString } from "./reverseString";

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
})

test('String reverses', ()=>{
  expect(reverseString('hello')).toBe('olleh')
})

test('String reverses with uppercase', ()=>{
  expect(reverseString('Hello')).toBe('olleh')
})