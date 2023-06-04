// import React, { useState, useEffect } from "react";
// import "./App.css";
// import TodoForm from "./components/TodoForm";
// import TodoList from "./components/TodoList";

// const App = () => {
//   const [todoData, setTodoData] = useState({ email: "", user: "" });
//   const [todos, setTodos] = useState([]);
//   const [editId, setEditId] = useState(0);

//   useEffect(() => {
//     const storedTodos = JSON.parse(localStorage.getItem("todos"));
//     if (storedTodos) {
//       setTodos(storedTodos);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users/')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         // update todos state with data from API
//         const apiTodos = data.map(todo => ({
//           id: `${todo.email}-${Date.now()}`,
//           Email: todo.email,
//           User: todo.name,
//         }));
//         setTodos(apiTodos);
//       })
//       .catch(error => {
//         alert('Error fetching todos.')
//         console.error(error)
//       });
//   }, []);

//   const handleSubmit = (newTodoData) => {
//     if (editId) {
//       const editTodo = todos.find((i) => i.id === editId);
//       const updatedTodos = todos.map((t) =>
//         t.id === editTodo.id ? { ...newTodoData } : { ...t }
//       );
//       setTodos(updatedTodos);
//       setEditId(0);
//     } else {
//       const newTodo = {
//         id: `${newTodoData.Email}-${Date.now()}`,
//         ...newTodoData,
//       };
//       setTodos([newTodo, ...todos]);
//     }
//     setTodoData({ email: "", user: "" });
//   };

//   const handleDelete = (id) => {
//     const isConfirmed = window.confirm(
//       "Bạn có chắc chắn muốn xóa công việc này không?"
//     );
//     if (isConfirmed) {
//       const delTodo = todos.filter((to) => to.id !== id);
//       setTodos(delTodo);
//     }
//   };

//   const handleEdit = (id) => {
//     const editTodo = todos.find((i) => i.id === id);
//     setTodoData(editTodo);
//     setEditId(id);
//   };

//   return (
//     <div className="App">
//       <div className="container">
//         <h1>HeHe</h1>
//         <TodoForm handleSubmit={handleSubmit} todoData={todoData} />
//         <TodoList
//           todos={todos}
//           handleEdit={handleEdit}
//           handleDelete={handleDelete}
//         />
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todoData, setTodoData] = useState({ email: "", user: "" });
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // update todos state with data from API
        const apiTodos = data.map(todo => ({
          id: `${todo.email}-${Date.now()}`,
          Email: todo.email,
          User: todo.name,
        }));
        setTodos(apiTodos);
      })
      .catch(error => {
        alert('Error fetching todos.')
        console.error(error)
      });
  }, []);

  const handleSubmit = (newTodoData) => {
    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id ? { ...newTodoData } : { ...t }
      );
      setTodos(updatedTodos);
      setEditId(0);
    } else {
      const newTodo = {
        id: `${newTodoData.Email}-${Date.now()}`,
        ...newTodoData,
      };
      setTodos([newTodo, ...todos]);
    }
    setTodoData({ email: "", user: "" });
  };

  const handleDelete = (id) => {
    const isConfirmed = window.confirm(
      "Bạn có chắc chắn muốn xóa user này không?"
    );
    if (isConfirmed) {
      const delTodo = todos.filter((to) => to.id !== id);
      setTodos(delTodo);
      alert("Xóa thành công!");
    }
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodoData(editTodo);
    setEditId(id);
  };

  const filteredTodos = todos.filter(todo =>
    todo.Email.toLowerCase().includes(searchValue.toLowerCase()) ||
    todo.User.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="App">
      <div className="container">
        <h1>HeHe</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <TodoForm handleSubmit={handleSubmit} todoData={todoData} />
        <TodoList
          todos={filteredTodos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;
