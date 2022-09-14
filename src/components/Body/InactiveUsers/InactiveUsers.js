import Users from '../Users/Users';

const InactiveUsers = ({ users }) => {
  return (
    <>
      <h2>Inactive Users</h2>
      <Users users={users} />
    </>
  );
};

export default InactiveUsers;