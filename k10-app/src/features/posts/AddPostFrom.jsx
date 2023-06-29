import { useState } from "react";
import { incrementByPost } from "./postsSlice";
import { Form, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const AddPostForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [users, setA] = useState("")
    const navigate = useNavigate()
    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);

    const user = useSelector((state) => state.users);
    console.log(user)
    const dispatch = useDispatch();

    // const canSave = Boolean(title) && Boolean(content) && Boolean(users)
    const onClick = () => {
        dispatch(incrementByPost({ title, content, users }))
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
                <select onChange={(e) => setA(e.target.value)}>

                    {user.map((u) => (
                        <>
                            <option key={u.id} value={u.id} >{u.name}</option>
                        </>
                    ))}
                </select>

                <button type="button" onClick={onClick} >Save Post</button>
            </Form>
        </section>
    );
};