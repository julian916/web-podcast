import {useEffect, useState} from "react";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import {getUsers} from "../api/user";

const Main = () => {
    const [userSearchText, setTextSearch] = useState('');
    const [isShowActive, setIsShowActive] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(getUsers());
    });

    const handleEnter = (value) => {
        setTextSearch(value);
    };
    const handleTabChange = (isActive) => {
        setIsShowActive(isActive);
    };

    const filterUsers = () => users.filter(({name}) => {
        return name.indexOf(userSearchText) > -1;
    });

    return (
        <div>
            <Header onEnter={handleEnter} onTabChange={handleTabChange}/>
            <Body isShowActive={isShowActive} users={filterUsers()} />
        </div>
    );
};

export default Main;

