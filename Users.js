export default class UsersStore {
  constructor(){
    this.users = []
  }
  getUser(userId){
    return this.users.filter(user => user.id === userId)[0]
  }
  setUser(user){
    this.users.push(user)
  }
  getUserDisplayName(userId){
    const user = this.getUser(userId)
    // console.log(`${user.FirstName}, ${user.LastName}`)
    return `${user.FirstName}, ${user.LastName}`
  }
}
export const UserStoreTemplate = new UsersStore()