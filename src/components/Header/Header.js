import {HeaderComponent, Input} from "./Header.model";
import {useState} from "react";
import NavBar from "./NavBar/NavBar";

const Header = ({ onEnter, onTabChange }) => {
    const [value, setValue] = useState('');
    const handleOnChange = (event) => {
        if(event.keyCode === 13)
        onEnter(value);
    };

    return (
        <HeaderComponent>
            <Input
                onKeyUp={handleOnChange}
                placeholder='Search for Users'
                onChange={(e) => setValue(e.target.value)}
            />
            <NavBar onChange={onTabChange}/>
        </HeaderComponent>
    );
}

export default Header;