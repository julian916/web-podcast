import Users from '../Users/Users';

const ActiveUsers = ({ users }) => {
  return (
    <>
      <h2>Active Users</h2>
      <Users users={users} />
    </>
  );
};

export default ActiveUsers;
