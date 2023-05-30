import React from 'react'
import IMAGE_APP from '../assets/image'
import styles from './style.module.scss'

export default function Todo({ todo, onClick, handleDelete }) {
    return (
        <div className={styles.todo}>
            <div>{todo.name}</div>
            <div>{todo.money}</div>
            <div className={styles.image}>
                <div><img src={IMAGE_APP.iconDelete} alt="" onClick={onClick} /></div>
                <div><img src={IMAGE_APP.iconEdit} alt="" /></div>
            </div>
        </div>

    )
}
