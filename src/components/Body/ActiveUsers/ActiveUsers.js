import Users from "../Users/Users";

const ActiveUsers = ({ users }) => {
    return (
        <>
            <h2>Active Users</h2>
            <Users users={users.filter(({isActive}) => isActive === true)} />
        </>
    );
};

export default ActiveUsers;
