import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionButton";
import { useEffect } from "react";
import { selectAllPosts, fetchPosts } from "./postsSlice";
import { Spinner } from "../../components/Spinner";

// export const PostList = () => {
//     const dispatch = useDispatch();
//     const posts = useSelector(selectAllPosts);

//     const postStatus = useSelector((state) => state.posts.status);
//     useEffect(() => {
//         if (postStatus === "idle") {
//             dispatch(fetchPosts());
//         }
//     }, [postStatus, dispatch]);

//     let orderedPosts = posts
//         .slice()
//         .sort((a, b) => b.date.localeCompare(a.date));

//     const renderedPosts = orderedPosts.map((post) => (
//         <article className="post-excerpt" key={post.id}>
//             <h3>{post.title}</h3>
//             <p className="post-content">{post.content.substring(0, 100)}</p>

//             <Link to={`/post/${post.id}`
//             }>
//                 Deltas
//             </Link>
//             <PostAuthor users={post.users} />
//             <TimeAgo timestamp={post.date} />
//             <ReactionButtons post={post} />
//         </article>
//     ))
//     return (
//         <section className="posts-list">
//             <h2>Posts</h2>
//             {renderedPosts}
//         </section>
//     )
// }
const PostExcerpt = ({ post }) => {
    console.log(post)
    return (
      <article className="post-excerpt">
        <h3>{post.title}</h3>
        <div>
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p className="post-content">{post.content.substring(0, 100)}</p>
  
        <ReactionButtons post={post} />
        <Link to={`/posts/${post.id}`} className="button muted-button">
          View Post
        </Link>
        <Link to={`/edit-post/${post.id}`} className="button muted-button">
          Edit Post
        </Link>
      </article>
    );
  };
  
  export const PostsList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector((state) => state.posts.status);
    const error = useSelector((state) => state.posts.error);
    useEffect(() => {
      if (postStatus === "idle") {
        dispatch(fetchPosts());
      }
    }, [postStatus, dispatch]);
    let content;
    if (postStatus === "loading") {
      content = <Spinner text="Loading..." />;
    } else if (postStatus === "succeeded") {
      // Sort posts in reverse chronological order by datetime string
      const orderedPosts = posts
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date));
  
      content = orderedPosts.map((post) => (
        <PostExcerpt key={post.id} post={post} />
      ));
    } else if (postStatus === "failed") {
      content = <div>{error}</div>;
    }
    return (
      <section className="posts-list">
        <h2>Posts</h2>
        {content}
      </section>
    );
  };