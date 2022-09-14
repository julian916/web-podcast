const NavBar = ({ onChange }) => {
  const handleShowActive = () => onChange(true);
  const handleShowInactive = () => onChange(false);
    
  return (
    <div>
      <button onClick={handleShowActive}>Active Users</button>
      <button onClick={handleShowInactive}>Inactive Users</button>
    </div>
  )
};

export default NavBar;

