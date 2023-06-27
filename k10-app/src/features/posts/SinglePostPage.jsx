import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SinglePostPage = () => {
    const {postId} = useParams();
    const posts = useSelector((state) => state.posts.find((post) => post.id === postId));
    return(
        <div>
            <h1>{posts.title}</h1>
            <h2>{posts.content}</h2>
        </div>
    )
}
export default SinglePostPage