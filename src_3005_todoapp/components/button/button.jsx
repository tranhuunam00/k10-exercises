import React from 'react'
import styles from './style.module.scss'

const ButtonCustom = ({text, handleButton = () => {} }) => {
    return (
        <button className={styles.button} onClick={handleButton}>
            {text}
        </button>
    )
}
export default ButtonCustom
