import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPostById } from "./postsSlice";

const SinglePostPage = () => {
    const {postId} = useParams();
    const posts = useSelector((state) => selectPostById(state, postId));
    return(
        <div>
            <h1>{posts.title}</h1>
            <h2>{posts.content}</h2>
        </div>
    )
}
export default SinglePostPage