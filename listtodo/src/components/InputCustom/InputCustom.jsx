import React from 'react'
import styles from './style.module.scss'
function InputCustom({label,type,name,onChange,placeholder,value}) {
  return (
    <div className={styles.inputClass}>
        <label htmlFor="">{label}</label>
        <input value={value} type={type} name={name} onChange={(e) => onChange(e.target)} placeholder={placeholder}/>
    </div>
  )
}

export default InputCustom