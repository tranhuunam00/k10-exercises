import { useState } from "react";
import { incrementByPost } from "./postsSlice";
import { Form, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const AddPostForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate()
    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);

    const dispatch = useDispatch();

    const onClick=()=>{
        dispatch(incrementByPost({ title, content }))
        return navigate('/post')
    }
    return (
        <section>
            <h2>Add a New Post</h2>
            <Form method="post">
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button type="button" onClick={onClick}>Save Post</button>
            </Form>
        </section>
    );
};