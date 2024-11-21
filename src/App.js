import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login'; 
import SignUp from './pages/auth/Signup';
import Posts from './pages/Posts';
import Post from './pages/Post';
import MakePost from './pages/MakePost';
import EditPost from './pages/EditPost';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 기본 라우트: /일 때 Login.js로 이동 */}
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/posts" element={<Posts/>} />
        <Route path="/post/make" element={<MakePost/>} />
        <Route path="/post" element={<Post/>} />
        <Route path="/post/edit" element={<EditPost/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
