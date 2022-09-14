import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Body from '../components/Body/Body';
import { getUsers } from '../api/users';

const Main = () => {
  const [userSearchText, setUserSearchText] = useState('');
  const [isShowActive, setIsShowActive] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(getUsers());
  }, []);

  const handleSearchChange = (searchValue) => {
    setUsers(getUsers(searchValue, isShowActive));
    setUserSearchText(searchValue);
  };
  const handleTabChange = (isActive) => {
    setUsers(getUsers(userSearchText, isActive));
    setIsShowActive(isActive);
  };

  return (
    <div>
      <Header onSearchChange={handleSearchChange} onTabChange={handleTabChange}/>
      <Body isShowActive={isShowActive} users={users} />
    </div>
  );
};

export default Main;

