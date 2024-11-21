import React from "react";
import "../../styles/common/header/header_1.css";

const Header1 = ({ title }) => {
  return (
    <>
    <header>
        <div class="head">
                <div class="title">
                    <h4>아무 말 대잔치</h4>
                </div>
                <div class="avatar">
                    <img src="/src/assets/images/logo/board-list-icon.png" alt="profile" />
                </div>
        </div>;
    </header> 
    </>
    )
};

export default Header1;
