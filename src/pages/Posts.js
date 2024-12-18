import React from "react";
import PostContainer from "../components/container/Container";
import ProfileHeader from "../components/header/profile-header";
import PostWriteButton from "../components/posts/PostWriteButton";
import PostsList from "../components/posts/PostsList";
import "../styles/posts/posts.css";

const Posts = () => {
  return (
    <PostContainer>
      <ProfileHeader title="아무 말 대잔치" />
      <section className="intro">
        <div className="intro-word">
          <p>
            안녕하세요,<br />
            아무 말 대잔치 <b>게시판</b>입니다.
          </p>
        </div>
        <PostWriteButton />
      </section>
      <section className="posts" id="posts">
        <PostsList />
      </section>
    </PostContainer>
  );
};

export default Posts;
