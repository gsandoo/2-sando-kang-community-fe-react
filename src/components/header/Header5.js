import React from 'react';

const MakePostHeader = ({ title }) => {
  const handleBack = () => {
    window.history.go(-1);
  };

  return (
    <header>
        <div id = "header-container">
          <div className="back">
            <button className="page-back" onClick={handleBack}>
              {'<'}
            </button>
          </div>
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="icon">
            <img src="/src/assets/images/logo/board-list-icon.png" alt="사용자 아이콘" className="user-icon" />
          </div>
        </div>
      </header>
  );
};

export default MakePostHeader;
