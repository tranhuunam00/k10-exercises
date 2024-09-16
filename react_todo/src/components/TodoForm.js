import React, { useState, useEffect } from "react";
import "./TodoForm.css";


const TodoForm = ({ handleSubmit, todoData }) => {
  const [formData, setFormData] = useState({ Email: "", User: "" });

  // Cập nhật dữ liệu form mỗi khi todo data thay đổi
  useEffect(() => {
    setFormData(todoData);
  }, [todoData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.Email || !formData.User) {
      return; // Không thực hiện submit nếu chưa nhập đủ thông tin
    }
    handleSubmit(formData);
    setFormData({ Email: "", User: "" });
  };

  return (
    <form onSubmit={handleFormSubmit} className="todo-form">
      <input
        type="text"
        placeholder="User"
        name="User"
        value={formData.User}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Email"
        name="Email"
        value={formData.Email}
        onChange={handleInputChange}
      />
      
      <br />
      <button type="submit" disabled={!formData.Email || !formData.User}>
        {formData.id ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;
