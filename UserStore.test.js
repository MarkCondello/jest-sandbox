import UsersStore from './Users.js'

test("Returns display name correctly", () => {
  const UserStoreTemplate = new UsersStore()
  UserStoreTemplate.setUser({
    id: 1,
    FirstName: 'Markamus',
    LastName: 'Condellos'
  })
   expect(UserStoreTemplate.getUserDisplayName(1)).toBe("Markamus, Condellos");
})



