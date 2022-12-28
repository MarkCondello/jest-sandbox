import axios from 'axios'

export const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = { firstName: 'Mark', }
    user['lastName'] = 'Condello'
    return user
  },
  fetchUser: (id = 1) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.data)
      .catch(err => err)
  }
}

// functions.fetchUser()
//   .then(res => {
//   console.log({res})
// });