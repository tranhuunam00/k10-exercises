import React, { useCallback } from 'react'
import InputCustom from '../components/inputCustom/InputCustom'
import ButtonCustom from '../components/ButtonCustom/ButtonCustom'
import styles from './style.module.scss'
import { useState } from 'react'
import IMAGE_APP from '../assets/image'
import TodoList from './ToDoList'
import { v4 } from 'uuid'

const FormToDo = () => {
  const [username, setUsername] = useState("")
  const [money, setMoney] = useState("")
  const [todoList, setTodoList] = useState([])

  const handleChangeInput = useCallback((e) => {
    const { name, value } = e
    if (name === "username") {
      const newName = value.trim();
      setUsername(newName)
    }
    if (name === "money") {
      const newMoney = value.trim();
      setMoney(newMoney)
    }
  }, [])

  const handleClickButton = useCallback((e) => {
    setTodoList([
      { id: v4(), name: username, money: money },
      ...todoList,
    ]);
  },
    [username, money, todoList])
  const handleClickDelete = (index) => {
    // const remoteList = [...todoList]
    // remoteList.splice(index)
    //     localStorage.setItem('key',JSON.stringify(remoteList))
    //     setListItem(remoteList)
  }
  return (
    <div>
      <h1>To do form</h1>
      <form action="" onSubmit={(e) => { e.preventDefault() }}>
        <InputCustom name={"username"} label={"Username"} placeholder={"Your username"} type={"text"} onChange={handleChangeInput} />
        <InputCustom name={"money"} label={"Money"} placeholder={"Your money"} type={"text"} onChange={handleChangeInput} />
        <ButtonCustom text={"Add"} disabled={!username && !money} onClick={handleClickButton} id={"button"} />
      </form>
      <div>
        <TodoList todoList={todoList} onClick={handleClickDelete} />
      </div>
    </div>
  )
}
export default FormToDo
