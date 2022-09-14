const USERS = [
  {
    id: 1,
    name: 'Julian',
    isActive: true
  },
  {
    id: 2,
    name: 'Petro',
    isActive: true
  },
  {
    id: 3,
    name: 'Carlos',
    isActive: false
  },
  {
    id: 4,
    name: 'Manuel',
    isActive: true
  },
  {
    id: 5,
    name: 'Pepe',
    isActive: false
  }
]

export const getUsers = (nameSearchValue = '', activeState = true) => {
  
  return USERS
    .filter(({ isActive }) => isActive === activeState)
    .filter(({ name }) => name.toLowerCase().indexOf(nameSearchValue.toLowerCase()) > -1)
}