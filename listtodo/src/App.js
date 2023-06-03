import { createContext, useState, useEffect, useContext } from "react";

import ButtonCustom from "./components/ButtonCustom/ButtonCustom";
import InputCustom from "./components/InputCustom/InputCustom";
import IMAGE_APP from "./assets/image";
import ModalEdit from "./components/modal/modalEdit";
import ModalDelete from "./components/modal/modalDelete";
import ModalDetail from "./components/modal/modalDetail";

export const DataContext = createContext();

function App() {
  const LIST_USER_API = "https://jsonplaceholder.typicode.com/users";
  

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [listTodo, setListTodo] = useState([]);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalDetail, setShowModalDetail] = useState(false);

  useEffect(() => {
    fetch(LIST_USER_API)
      .then((response) => response.json())
      .then((data) => setListTodo(data));
  }, []);

  const handleClickButton = () => {
    setListTodo([
      ...listTodo,
      { id: Math.floor(Math.random() * 100000), name: username, email: email },
    ]);
    setUsername("");
    setEmail("");
  };
  console.log(listTodo);
  const handleCLickImgEdit = () => {
    setShowModalEdit(true);
  };

  const handleCLickImgDelete = (data) => {
    // const removeList = listTodo.filter((value) => value.id !== data.id);
    // setListTodo(removeList);
    setShowModalDelete(true);
  };
  const handleClickValueDetail = () => {
    setShowModalDetail(true);
  };
  const Todo = ({ value, index, onDelete, onUpdate, onDetail }) => {
    return (
      <tr key={value.id}>
        <td>{index + 1}</td>
        <td>{value.id}</td>
        <td
          onClick={() => {
            onDetail();
          }}
        >
          {value.name}
        </td>
        <td
          onClick={() => {
            onDetail();
          }}
        >
          {value.email}
        </td>
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
    <DataContext.Provider value={listTodo}>
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
          <th>username</th>
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
              onDetail={handleClickValueDetail}
            />
          );
        })}
      </table>
      {showModalEdit && <ModalEdit cloneModal={setShowModalEdit} />}
      {showModalDelete && <ModalDelete cloneModal={setShowModalDelete} />}
      {showModalDetail && <ModalDetail cloneModal={setShowModalDetail} />}
    </>
    </DataContext.Provider>
  );
}

export default App