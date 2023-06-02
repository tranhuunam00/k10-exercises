import { useContext, useState, useEffect, useRef } from "react";
import { v4 } from "uuid";

import ButtonCustom from "./components/ButtonCustom/ButtonCustom";
import InputCustom from "./components/InputCustom/InputCustom";
import UserProvider from "./context/user.provider";
import UserContext from "./context/user.context";
import IMAGE_APP from "./assets/image";

function App() {
  const LIST_USER_API = "https://jsonplaceholder.typicode.com/users";
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [listTodo, setListTodo] = useState([]);
  const saveEffect = useRef(true);

  useEffect(() => {
    saveEffect.current = false;
    fetch(LIST_USER_API)
      .then((response) => response.json())
      .then((data) => setListTodo(data));
    return () => saveEffect.current;
  }, []);

  const handleClickButton = () => {
    setListTodo([
      ...listTodo,
      { id: Math.floor(Math.random() * 100000), name: username, email: email },
    ]);
    setUsername("");
    setEmail("");
  };
  const handleCLickImgEdit = () => {
    console.log("Aaaaaaaaaaaaaaaaaaaaa")
  };

  const handleCLickImgDelete = (data) => {
    const removeList = listTodo.filter((value) => value.id !== data.id);
    setListTodo(removeList);

  };
  const Todo = ({ value, index, onDelete,onUpdate }) => {
    return (
      <tr key={value.id}>
        <td>{index + 1}</td>
        <td>{value.id}</td>
        <td>{value.name}</td>
        <td>{value.email}</td>
        <td>
          <img
            src={IMAGE_APP.iconEdit}
            alt=""
            onClick={(e) => {
              onUpdate();
            }}
          />
        </td>
        <td>
          <img
            src={IMAGE_APP.iconDelete}
            alt=""
            onClick={() => {
              onDelete(value, index);
            }}
          />
        </td>
      </tr>
    );
  };
  return (
    <>
      <h1>HeHe</h1>
      <InputCustom
        label={"Username"}
        name={"username"}
        onChange={(e) => {
          const { value } = e;
          setUsername(value);
        }}
        placeholder={"Username"}
        value={username}
      />
      <InputCustom
        label={"Email"}
        name={"email"}
        onChange={(e) => {
          const { value } = e;
          setEmail(value);
        }}
        placeholder={"Email"}
        value={email}
      />

      <ButtonCustom
        text={"Thêm"}
        disabled={!username || !email}
        onClick={() => {
          handleClickButton();
        }}
      />
      <h2>List to do</h2>
      <table>
        <tr>
          <th>stt</th>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>edit</th>
          <th>delete</th>
        </tr>

        {listTodo.map((value, index) => {
          return (
            <Todo
              key={value.id}
              value={value}
              index={index}
              onDelete={handleCLickImgDelete}
              onUpdate={handleCLickImgEdit}
            />
          );
        })}
      </table>
    </>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <UserProvider>
    <App />
  </UserProvider>
);
