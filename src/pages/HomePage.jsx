/** @jsx createVNode */
import { createVNode } from "../lib";

import { Footer, Header, Navigation, Post, PostForm } from "../components";
import { globalStore } from "../stores";

/**
 * 심화과제
 * - 로그인한 사용자는 게시물을 추가할 수 있다.
 * - 로그인한 사용자는 게시물에 좋아요를 누를 수 있다.
 * - 로그인하지 않은 사용자가 게시물에 좋아요를 누를 경우, "로그인 후 이용해주세요"를 alert로 띄운다.
 */
export const HomePage = () => {
  const { posts, loggedIn, currentUser } = globalStore.getState();
  const username = currentUser?.username;

  const hasLiked = (likeUsers) => {
    return likeUsers.includes(username);
  };

  const handleLikePost = (postId) => {
    if (!loggedIn) {
      alert("로그인 후 이용해주세요");
      return;
    }

    const post = posts.find((p) => p.id === postId);
    if (!post) return;

    const oldLikeUsers = post.likeUsers ? post.likeUsers : [];

    const updatedLikeUsers = hasLiked(oldLikeUsers)
      ? oldLikeUsers.filter((user) => user !== username)
      : [...oldLikeUsers, username];

    const updatedPosts = posts.map((p) =>
      p.id === postId ? { ...p, likeUsers: updatedLikeUsers } : p,
    );

    globalStore.setState({ posts: updatedPosts });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center">
      <div className="max-w-md w-full">
        <Header />
        <Navigation />

        <main className="p-4">
          {loggedIn && <PostForm />}
          <div id="posts-container" className="space-y-4">
            {[...posts]
              .sort((a, b) => b.time - a.time)
              .map((props) => {
                const { likeUsers, id } = props;
                return (
                  <Post
                    {...props}
                    activationLike={hasLiked(likeUsers)}
                    handleLikePost={() => handleLikePost(id)}
                  />
                );
              })}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};
