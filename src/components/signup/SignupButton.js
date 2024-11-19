import React from "react";

const SignUpButton = ({ onClick }) => {
  return (
    <div id="signin-button">
      <button className="signup-button" onClick={onClick}>
        회원가입
      </button>
    </div>
  );
};

export default SignUpButton;
