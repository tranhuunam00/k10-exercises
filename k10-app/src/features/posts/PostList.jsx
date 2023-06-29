import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionButton";

export const PostList = () => {
    const posts = useSelector((state) => state.posts);
    console.log(posts)
    let orderedPosts = posts
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date));

    const renderedPosts = orderedPosts.map((post) => (  
        <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <p className="post-content">{post.content.substring(0, 100)}</p>

            <Link to={`/post/${post.id}`
            }>
                Deltas
            </Link>
            <PostAuthor users={post.users} />
            <TimeAgo timestamp={post.date} />
            <ReactionButtons post={post}/>
        </article>
    ))
    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}
