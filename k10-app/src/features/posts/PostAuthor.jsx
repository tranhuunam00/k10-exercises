import { useSelector } from "react-redux";

export const PostAuthor = ({ users }) => {
    const author = useSelector((state) => {
        return state.users.find((user) => user.id === users);
    });
    return <span> {author ? author.name : "Unknown author"}</span>;
};
