import {functions} from './functions.js'

// beforeEach(() => initDatabase())
// afterEach(() => closeDatabase())

// beforeAll(()=> initDatabase())
// afterAll(()=> closeDatabase())
const initDatabase = () => console.log('DB initialized'),
closeDatabase = () => console.log('DB closed'),
nameCheck = () => console.log('Checking names...!')

describe('Checking names', () => {
  beforeEach(()=> nameCheck())
  test('User is Geoff', ()=>{
    const user = 'Geoff'
    expect(user).toBe('Geoff')
  })
})

test('Adds 2 + 2 to equal 4.', ()=>{
  expect(functions.add(2,2)).toBe(4)
})

test('Adds 2 + 2 not equal to 5.', ()=>{
  expect(functions.add(2,2)).not.toBe(5)
})

test('isNull should be null.', ()=>{
  expect(functions.isNull()).toBe(null)
})

test('checkValue should be false.', ()=>{
  expect(functions.checkValue(undefined)).toBeFalsy()
})

test('createUser should be created.', ()=>{
  expect(functions.createUser()).toStrictEqual({firstName: 'Mark', lastName: 'Condello'})
})

test('Should be under 1600', () => {
  const load1 = 800,
  load2 = 700
  expect(load1 + load2).toBeLessThan(1600)
})

//Regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i)
})

//Arrays
test('Admin should be in username', () => {
  const usernames = ['john', 'karen', 'admin']
  expect(usernames).toContain('admin')
})

// //async data
test('User fetched name to be Leanne Graham', async () => {
    expect.assertions(1) // expects a request was made, asynchronous call with promise was made
    const data = await functions.fetchUser(1)
    // .then(data => {
    // })
    // console.log('Data in fetched name to be', data)
    expect(data.name).toEqual('Leanne Graham')

    //if we dont return data or use an assertions(), the async test will pass creating a false positive
})