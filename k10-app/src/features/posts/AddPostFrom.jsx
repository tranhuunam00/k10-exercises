import { useState } from "react";
import { addNewPost, incrementByPost } from "./postsSlice";
import { Form, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const AddPostForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [users, setA] = useState("")
    const [addRequestStatus, setAddRequestStatus] = useState("idle");

    const navigate = useNavigate()
    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);

    const canSave = [title,content].every(Boolean) && addRequestStatus === "idle";

    const onSavePostClicked = async () => {
        if (canSave) {
          try {
            setAddRequestStatus("pending");
            await dispatch(addNewPost({ title, content,users })).unwrap();
            setTitle("");
            setContent("");
            console.error("Success to save the post: ");
          } catch (err) {
            console.error("Failed to save the post: ", err);
          } finally {
            setAddRequestStatus("idle");
            navigate("/post");
          }
        }
      };


    const user = useSelector((state) => state.users);
    const dispatch = useDispatch();
    // const onClick = () => {
    //     dispatch(incrementByPost({ title, content, users }))
    //     return navigate('/post')
    // }
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

                <button type="button" onClick={onSavePostClicked} >Save Post</button>
            </Form>
        </section>
    );
};