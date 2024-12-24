import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const pageRef = useRef(1); // 페이지를 참조로 관리
  const { ref, inView } = useInView({ threshold: 0.1 }); // 감지 임계값 설정 (0.1: 10% 보이면 감지)

  const fetchPosts = async () => {
    if (isLoading || !hasMore) return; // 로딩 중이거나 더 가져올 데이터가 없으면 차단

    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    try {
      const response = await fetch(`/api/post?page=${pageRef.current}`);
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        const { postData, hasMore: morePostsAvailable } = data.data;

        setPosts((prevPosts) => [
          ...prevPosts,
          ...postData.filter(
            (newPost) => !prevPosts.some((prevPost) => prevPost.id === newPost.id)
          ),
        ]);

        pageRef.current += 1; // 페이지 증가
        setHasMore(morePostsAvailable); // 더 가져올 데이터 여부 설정
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false); // 로딩 상태 해제
    }
  };

  useEffect(() => {
    if (inView && hasMore && !isLoading) {
      console.log("Fetching more posts...");
      fetchPosts();
    }
  }, [inView, hasMore, isLoading]);

  useEffect(() => {
    // 초기 데이터 로드
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          className="post"
          onClick={() => handlePostClick(post)}
        >
          <div className="post-header">
            <h2>{post.title}</h2>
            <span className="date">{post.date}</span>
          </div>
          <div className="post-info">
            <span>좋아요 {formatNumber(post.likes)}</span>
            <span>댓글 {formatNumber(post.comments)}</span>
            <span>조회수 {formatNumber(post.views)}</span>
          </div>
          <div className="author">
            <div className="avatar">
              <img src={post.profile} alt="profile" />
            </div>
            <span>{post.author || "Unknown Author"}</span>
          </div>
        </div>
      ))}
      {isLoading && <div id="loading">Loading...</div>}
      {!hasMore && <div id="no-more-posts">더 이상 게시글이 없습니다.</div>}
      <div ref={ref} style={{ height: "1px", marginBottom: "20px" }} /> {/* 감지 요소 */}
    </div>
  );

  function handlePostClick(post) {
    console.log("Post clicked:", post);
  }

  function formatNumber(num) {
    if (num >= 100000) return Math.floor(num / 1000) + "k";
    if (num >= 10000) return (num / 1000).toFixed(0) + "k";
    if (num >= 1000) return (num / 1000).toFixed(1) + "k";
    return num.toString();
  }
};

export default PostsList;
