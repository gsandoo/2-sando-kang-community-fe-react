// PostField.js

import React from "react";
import { saveLocalStorage } from '../../utils/session';
import { handleLocation } from '../../utils/handleLocation';

import '../../styles/post/post.css';

const PostField = ({ post }) => {
  const handleModify = () => {
    saveLocalStorage("editTitle", post.title);
    saveLocalStorage("editContent", post.content);
    handleLocation("/html/edit post.html");
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("게시글을 삭제하시겠습니까?");
    if (confirmDelete) {
      // 삭제 로직
      alert("게시글이 삭제되었습니다.");
    }
  };

  return (
    <div className="post-field">
      <article>
        {/* Title */}
        <h2>{post.title}</h2>
        
        {/* Author Section */}
        <div className="author">
          <div className="avatar">
            {/* 여기서 이미지 추가 가능 */}
            <img src={post.authorAvatar || "/assets/images/default-avatar.png"} alt="avatar" />
          </div>
          <div className="author-info">
            <span className="author-name">{post.author || "알 수 없음"}</span>
            <span className="date">{post.updatePostDate || "알 수 없음"}</span>
          </div>

          <div className="post-actions">
            <div className="edit" id="btnbtn" onClick={handleModify}>수정</div>
            <div className="delete" id="btnbtn"  onClick={handleDelete}>삭제</div>
          </div>
        </div>

        {/* Post Content */}
        <div className="post-content">
          <div className="post-img">
            <img src="/assets/images/logo/board-list-icon.png" alt="board" />
          </div>
          <div className="post-article">
            <p>{post.content}</p>
          </div>
        </div>

        {/* Post Stats */}
        <div className="post-stats">
          <div className="stats" id="likesCount">{post.likesCnt || 0} 좋아요</div>
          <div className="stats" id="viewsCount">{post.viewsCnt || 0} 조회수</div>
          <div className="stats" id="commentsCount">{post.commentsCnt || 0} 댓글</div>
        </div>
      </article>
    </div>
  );
};

export default PostField;
