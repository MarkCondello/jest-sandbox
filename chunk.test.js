import { chunkArray } from "./chunk";

test('ChunkArray function exists', ()=> {
  expect(chunkArray).toBeDefined()
})
test('Chunk an array of 10 values with a length of 2.', ()=> {
  const numbers = [1,2,3,4,5,6,7,8,9,10],
  len = 2,
  chunkedArr = chunkArray(numbers, len)
  expect(chunkedArr).toEqual([[1,2],[3,4],[5,6],[7,8],[9,10]])
})
test('Chunk an array of 3 values with a length of 1.', ()=> {
  const numbers = [1,2,3],
  len = 1,
  chunkedArr = chunkArray(numbers, len)
  expect(chunkedArr).toEqual([[1],[2],[3]])

})