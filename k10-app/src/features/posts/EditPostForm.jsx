import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, useNavigate, useParams } from "react-router-dom"
import { postUpdate } from "./postsSlice";


const EditPostForm = () => {
    const { postId } = useParams();
    const navigate = useNavigate()
    const posts = useSelector((state) => state.posts.find((post) => post.id === postId));
    
    
    const [title, setTitle] = useState()
    const [content, setContent] = useState()
    const HandledInputValue = (e) => {
        const{ name , value} = e.target
        if(name === "title") setTitle(value)
        if(name === "content") setContent(value)
    }

    const dispatch = useDispatch()
    const onSave = () => {
        if(title && content){
            dispatch(postUpdate({id:postId,title,content}))
        }
        return navigate(`/post`)
    }

    return (
        <Form >
            <p>
                <span>Title</span>
                <input
                    placeholder="Title"
                    type="text"
                    name="title"
                    defaultValue={posts.title}
                    onChange={HandledInputValue}
                />

            </p>
            <label>
                <span>Content</span>
                <input
                    type="text"
                    name="content"
                    placeholder="Content"
                    defaultValue={posts.content}
                    onChange={HandledInputValue}
                />
            </label>


            <button type="button" onClick={onSave}>Save</button>


        </Form>
    )
}
export default EditPostForm