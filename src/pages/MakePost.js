import React from 'react';
import ProfileContainer from '../components/container/ProfileContainer';
import MakePostHeader from '../components/header/make-post-header';
import MakePostForm from '../components/make post/MakePostForm';

const MakePost = () => {
  return (
    <ProfileContainer>
      <MakePostHeader title="아무 말 대잔치" />
      <MakePostForm />
    </ProfileContainer>
  );
};

export default MakePost;
