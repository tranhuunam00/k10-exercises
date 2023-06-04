
import React, { useState } from "react";
import TodoDetailModal from "./TodoDetailModal";
import "./TodoList.css";


function TodoList({ todos, handleEdit, handleDelete }) {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleTodoClick = (todo) => {
    setSelectedTodo(todo);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setSelectedTodo(null);
    setShowModal(false);
  };

  return (

    <div className="container-flex">
      <div className="table-container">
        <div className="todo-list-container">
          <h2>Todo List</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, index) => (
                <tr key={todo.id}>
                  <td>{index + 1}</td>
                  <td>{todo.User}</td>
                  <td>{todo.Email}</td>
                  <td>
                    <button onClick={() => handleEdit(todo.id)}> <i class="fa-solid fa-pen"></i></button>
                    <button onClick={() => handleDelete(todo.id)}><i class="fa-solid fa-trash"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
        <div className="modal-detail-container">
          <h2>Modal Detail</h2>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.User}</td>
                  <td>{todo.Email}</td>
                  <td>
                    <button onClick={() => handleTodoClick(todo)}>View Details</button>
                    {selectedTodo && showModal && (
                      <TodoDetailModal todo={selectedTodo} onClose={handleCloseModal} />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


    </div>

  );
};

export default TodoList;
