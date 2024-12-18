import React from 'react';
import { getLocalStorage} from '../../utils/session';
const CommentField = ({ comments, onDeleteComment, onEditComment }) => {
  if (!comments || comments.length === 0) return null; // 댓글이 없으면 렌더링하지 않음

  const handleEdit = (comment) => {
    if (onEditComment) {
      onEditComment(comment);
    }
  };

  const handleDelete = (commentId) => {
    if (onDeleteComment) {
      onDeleteComment(commentId);
    }
  };

  return (
    <div className='comment-field'>
      <div className="comments-section">
        {comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <div className="comment-author">
              <span>{comment.author || "작성자 정보 없음"}</span>
              <span>{new Date(comment.date).toISOString().slice(0, 10)}</span>
            </div>
            <div className="comment-content">
            <p>
              {comment.content.length > 50
                ? comment.content.match(/.{1,50}/g).map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))
                : comment.content}
            </p>
            </div>
            <div className="comment-actions">
              {comment.user_id == getLocalStorage('userId') && (
                <>
                  <div className="comment-edit" id='btnbtn' onClick={() => handleEdit(comment)}>
                  수정
                </div>
                <div className="comment-delete" id='btnbtn' onClick={() => handleDelete(comment.id)}>
                  삭제
                </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentField;
