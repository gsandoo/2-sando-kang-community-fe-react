import React from 'react';
import PostsContainer from "../components/container/posts-container";
import ProfileHeaderBack from '../components/header/profile-header-back';
import MakePostForm from '../components/make post/MakePostForm';

const MakePost = () => {
  return (
    <PostsContainer>
      <ProfileHeaderBack title="아무 말 대잔치" />
      <MakePostForm />
    </PostsContainer>
  );
};

export default MakePost;
