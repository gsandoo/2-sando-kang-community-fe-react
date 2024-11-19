// SignUp.js

import React, { useState } from "react";
import SignUpContainer from "../../components/signup/container/Container_4";
import Header from "../../components/signup/header/Header4";
import ProfileImageUploader from "../../components/profile/ProfileImageUploader";
import SignUpForm from "../../components/signup/SignUpForm";
import SignUpButton from "../../components/signup/SignupButton";
import { handleLocation } from "../../utils/handleLocation";
import "../../styles/auth/signup/signup.css";

const SignUp = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
  });

  const handleInputChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleImageChange = (file) => {
    setImageFile(file);
  };

  const handleFormValidation = (isValid) => {
    setIsFormValid(isValid);
  };

  const handleSignUpSubmit = async () => {
    const { email, password, confirmPassword, nickname } = formData;

    try {
      const response = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        alert('회원가입이 성공적으로 이루어졌습니다.');
        handleLocation('/'); // 회원가입 후 로그인 페이지로 이동
      } else {
        alert(`회원가입 실패: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('서버 요청 중 오류가 발생했습니다.');
    }
  };

  return (
    <SignUpContainer>
      <Header title={'아무말 대잔치'}/>
      <h2>회원가입</h2>
      <ProfileImageUploader onImageChange={handleImageChange} />
      <SignUpForm
        onInputChange={handleInputChange}
        onSubmit={handleSignUpSubmit}
        onValidate={handleFormValidation}
      />
     
    </SignUpContainer>
  );
};

export default SignUp;
