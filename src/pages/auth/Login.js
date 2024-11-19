import React, { useState } from "react";
import LoginContainer from "../../components/login/container/LoginContainer";
import Header from "../../components/login/header/header3";
import LoginForm from "../../components/login/LoginForm";
import LoginButton from "../../components/login/LoginButton";
import SignUpButton from "../../components/login/SignUpButton";
import { handleLocation } from "../../utils/handleLocation";

import '../../styles/auth/login/login.css';

const Login = () => {
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFormValidation = (isValid) => {
    setIsFormValid(isValid);
  };

  const handleLoginSubmit = async ({ email, password }) => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.success) {
        alert("로그인이 정상적으로 이루어졌습니다.");
        localStorage.setItem("userId", data.data.user_id);
        handleLocation("/html/Posts.html");
      } else {
        alert(`로그인이 되지 않았습니다: ${data.message.code}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("서버 요청 중 오류가 발생했습니다.");
    }
  };

  return (
    <LoginContainer>
      <Header title="아무 말 대잔치" />
      <h2>로그인</h2>
      <div className="login-container">
        <LoginForm
          onSubmit={handleLoginSubmit}
          onValidate={handleFormValidation}
        />
      </div>

      <div id="login-button">
        <LoginButton
          isActive={isFormValid}
          onClick={() =>
            isFormValid &&
            handleLoginSubmit({
              email: localStorage.getItem("email"),
              password: localStorage.getItem("password"),
            })
          }
        />
      </div>

      <div id="signin-button">
        <SignUpButton onClick={() => handleLocation("/html/signin.html")} />
      </div>
    </LoginContainer>
  );
};

export default Login;
