import { HeaderComponent, Input } from './Header.model';
import NavBar from './NavBar/NavBar';

const Header = ({ onSearchChange, onTabChange }) => {
  const handleOnChange = (event) => {
    if(event.keyCode === 13)
      onSearchChange(event.target.value);
  };

  return (
    <HeaderComponent>
      <Input
        onKeyPress={handleOnChange}
        onKeyUp={handleOnChange}
        placeholder='Search for Users'
      />
      <NavBar onChange={onTabChange}/>
    </HeaderComponent>
  );
}

export default Header;