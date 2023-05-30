import React from 'react'
import Todo from './Todo'

export default function TodoList({ todoList, onClick }) {
    return (
        <div>
            <h3>To do list</h3>
            {
                todoList.map((todo, index) => (
                    <Todo key={index} todo={todo} onClick={onClick} />
                ))
            }
        </div>
    )
}
