import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login'; 
import SignUp from './pages/auth/Signup';
import Posts from './pages/Posts';
import Post from './pages/Post';
import MakePost from './pages/MakePost';
import EditPost from './pages/EditPost';
import Profile from './pages/Profile';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/posts" element={<Posts/>} />
        <Route path="/post/make" element={<MakePost/>} />
        <Route path="/post" element={<Post/>} />
        <Route path="/post/edit" element={<EditPost/>} />
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
