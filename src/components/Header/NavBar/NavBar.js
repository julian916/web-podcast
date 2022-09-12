const NavBar = ({ onChange }) => {
    const handleShowActive = (isActive) => {
        onChange(isActive);
    };

    return (
        <div>
            <button onClick={() => handleShowActive(true)}>Active Users</button>
            <button onClick={() => handleShowActive(false)}>Inactive Users</button>
        </div>
    )
};

export default NavBar;

