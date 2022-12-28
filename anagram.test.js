import { isAnagram } from "./anagram";
test('isAnagram is defined.', ()=> {
   expect(typeof isAnagram).toEqual('function')
})
test('"Fast" and "fats" are an anagram.', ()=> {
  const anagramCheck = isAnagram('fast', 'fats')
  expect(anagramCheck).toBeTruthy()
})

test('"dity room" and "dormitory###" is an anagram.', ()=> {
  const anagramCheck = isAnagram('dirty room', 'dormitory###')
  expect(anagramCheck).toBeTruthy()
})

test('"dity room" and "dormitoory###" is not an anagram.', ()=> {
  const anagramCheck = isAnagram('dirty room', 'dormitoory###')
  expect(anagramCheck).toBeFalsy()
})