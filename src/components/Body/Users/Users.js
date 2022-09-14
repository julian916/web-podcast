const Users = ({ users }) => {
  return (
    users.map(({ id, name }) =>
      (
        <div key={id}>
          {name}
        </div>
      ))
  )
};

export default Users;

