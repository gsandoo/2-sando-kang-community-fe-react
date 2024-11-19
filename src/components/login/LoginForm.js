import React, { useState, useEffect } from "react";
import { emailValidCheck, pwValidCheck } from '../../utils/validation';

const LoginForm = ({ onSubmit, onValidate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    let isValid = true;

    if (!email.trim()) {
      setEmailError("이메일을 입력하세요.");
      isValid = false;
    } else if (!emailValidCheck(email.trim())) {
      setEmailError("*올바른 이메일 주소 형식을 입력해주세요.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password.trim()) {
      setPasswordError("비밀번호를 입력하세요.");
      isValid = false;
    } else if (!pwValidCheck(password.trim())) {
      setPasswordError("*비밀번호는 8자 이상, 20자 이하이며, \n 대문자, 소문자, 숫자, 특수문자를 각각 최소 1개 포함해야 합니다.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    setIsFormValid(isValid);
    onValidate(isValid);
  };

  useEffect(() => {
    if (email || password) validateForm();
  }, [email, password]);

  return (
    <form>
      <div className="input-group">
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="error-message">{emailError}</div>
      </div>

      <div className="input-group">
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="error-message">{passwordError}</div>
      </div>
    </form>
  );
};

export default LoginForm;
