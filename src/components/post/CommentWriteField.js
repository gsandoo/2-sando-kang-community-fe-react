import React, { useState, useEffect } from "react";

const CommentWriteField = ({ onAddComment, initialComment, onEditComment }) => {
  const [commentContent, setCommentContent] = useState("");

  // 댓글 수정 시 초기 댓글 내용이 textarea에 표시되도록 처리
  useEffect(() => {
    if (initialComment) {
      setCommentContent(initialComment.content); // 수정하려는 댓글 내용을 설정
    } else {
      setCommentContent(""); // 새로운 댓글 작성 시 textarea 초기화
    }
  }, [initialComment]); // initialComment이 변경될 때마다 textarea 내용을 업데이트

  // 댓글 내용 변경 처리
  const handleCommentChange = (event) => {
    setCommentContent(event.target.value);
  };

  // 댓글 등록 처리
  const handleSubmit = async () => {
    if (commentContent.trim() === "") {
      alert("댓글 내용을 입력해주세요.");
      return;
    }

    if (initialComment) {
      // 댓글 수정 로직
      const response = await fetch("http://localhost:3000/api/comment", {
        method: "PUT", // 댓글 수정 요청
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          commentId: initialComment.id,
          content: commentContent,
        }),
      });
      const data = await response.json();
      if (data.success) {
        alert("댓글이 수정되었습니다.");
        onEditComment(null); // 수정 후 초기화
      } else {
        alert("댓글 수정 실패:", data.message);
      }
    } else {
      // 댓글 등록 로직
      await onAddComment(commentContent); // 댓글 등록 API 호출
    }

    setCommentContent(""); // 댓글 작성 후 textarea 초기화
  };

  return (
    <div className="comment-field">
      <div className="comment-form">
          <textarea
            value={commentContent}
            onChange={handleCommentChange}
            placeholder="댓글을 남겨주세요!"
          />
          <button className="comment-submit" onClick={handleSubmit}>
            {initialComment ? "댓글 수정" : "댓글 등록"}
          </button>
        </div>
    </div>
  );
};

export default CommentWriteField;
