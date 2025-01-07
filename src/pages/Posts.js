import React from "react";
import PostsContainer from "../components/container/posts-container";
import ProfileHeader from "../components/header/profile-header";
import PostWriteButton from "../components/posts/PostWriteButton";
import PostsList from "../components/posts/PostsList";
import "../styles/posts/posts.css";
import { getLocalStorage } from "../utils/session";

const Posts = () => {
  const userId = getLocalStorage('userId');
  return (
    <PostsContainer>
      <ProfileHeader title="squid world" />
      <section className="intro">
        <div className="intro-word">
          <p>
            {userId}번 참가자,<br />
            <b>오징어 월드</b>에 온걸 환영해.
          </p>
        </div>
        <PostWriteButton />
      </section>
      <section className="posts" id="posts">
        <PostsList />
      </section>
    </PostsContainer>
  );
};

export default Posts;
