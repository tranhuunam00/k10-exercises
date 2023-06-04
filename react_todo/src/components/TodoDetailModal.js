import React from "react";
import "./TodoDetailModal.css";

function TodoDetailModal({ todo, onClose }) {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2>Todo Detail</h2>
          <p>Email: {todo.Email}</p>
          <p>User: {todo.User}</p>
          
        </div>
      </div>
    );
  }
  
  export default TodoDetailModal;
  
