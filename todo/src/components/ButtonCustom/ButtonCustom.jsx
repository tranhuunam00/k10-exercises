import React from 'react'
import styles from './style.module.scss'

function ButtonCustom({text,onClick,disabled,id}) {
  return (
    <div>
        <button onClick={onClick} disabled={disabled} id={id}>{text}</button>
    </div>
  )
}

export default ButtonCustom