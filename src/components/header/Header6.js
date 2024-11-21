import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getLocalStorage } from '../../utils/session';

const ProfileHeader = ({ title }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
    console.log(dropdownVisible)
  };

  return (
    <header className="profile-header">
      <div className="head">
      <h1 className="title">{title}</h1>
        <div className="avatar" onClick={toggleDropdown}>
          <img src={getLocalStorage('profile')} alt="Profile" />
        </div>
        {dropdownVisible && (
          <div className="dropdown-menu">
            <Link to={"/profile"}>프로필 수정</Link>
            <Link to={"/logout"}>로그아웃</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default ProfileHeader;
