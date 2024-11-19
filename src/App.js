import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login'; // Login.js의 경로
import SignUp from './pages/auth/SignUp';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 기본 라우트: /일 때 Login.js로 이동 */}
        <Route path="/" element={<Login/>} />
        <Route path="/signUp" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
