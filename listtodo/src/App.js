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
  const [locationDataDelete, setLocationDataDelete] = useState([]);
  const [locationDataDetail, setLocationDataDetail] = useState([]);
  const [locationDataEdit, setLocationDataEdit] = useState([]);
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
  const handleCLickImgShowModalEdit = (data) => {
    setShowModalEdit(true);
    setLocationDataEdit(data);
  };

  const handleCLickImgShowModalDelete = (data) => {
    setShowModalDelete(true);
    setLocationDataDelete(data);
  };

  const handleCLickImgShowModalDetail = (data) => {
    setShowModalDetail(true);
    setLocationDataDetail(data);
  };

  const handleCLickDeleteItem = () => {
    const removeList = listTodo.filter(
      (value) => value.id !== locationDataDelete.id
    );
    setListTodo(removeList);
  };
  
  const handleCLickEditItem = (dataUser) => {
    setListTodo(listTodo.map((value)=> value.id === dataUser.id ? dataUser : value))
    // listTodo : mảng ban đầu
    // dataUser : mảng mới
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
            onDetail(value, index);
          }}
        >
          {value.email}
        </td>
        <td>
          <img
            src={IMAGE_APP.iconEdit}
            alt=""
            onClick={(e) => {
              onUpdate(value, index);
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
    <DataContext.Provider
      value={{
        listTodo,
        handleCLickEditItem,
        handleCLickDeleteItem,
        locationDataDelete,
        locationDataDetail,
        locationDataEdit,
      }}
    >
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
          text={"Add"}
          disabled={!username || !email}
          onClick={() => {
            handleClickButton();
          }}
        />
        <h2>List to do</h2>
        <table>
          <thead>
            <tr>
              <th>stt</th>
              <th>id</th>
              <th>username</th>
              <th>email</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
          </thead>

          <tbody>
            {listTodo.map((value, index) => {
              return (
                <Todo
                  key={value.id}
                  value={value}
                  index={index}
                  onDelete={handleCLickImgShowModalDelete}
                  onUpdate={handleCLickImgShowModalEdit}
                  onDetail={handleCLickImgShowModalDetail}
                />
              );
            })}
          </tbody>
        </table>
        {showModalEdit && <ModalEdit cloneModal={setShowModalEdit} />}
        {showModalDelete && <ModalDelete cloneModal={setShowModalDelete} />}
        {showModalDetail && <ModalDetail cloneModal={setShowModalDetail} />}
      </>
    </DataContext.Provider>
  );
}

export default App;
