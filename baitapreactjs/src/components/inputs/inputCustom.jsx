import Styles from './Style.module.scss'

import { useState } from 'react'

const InputCustom = ({ label, img, type, error, onChange = () => {}, name }) => {
    return (
        <div className={Styles.inputGroup}>
            <label htmlFor="">{label}</label>
            <img src={img} alt="" />
            <input
                type={type}
                onChange={(e) => {
                    onChange(e.target)
                }}
                placeholder="Ban Hay Nhap..."
                name={name}
            />
            <p>{error}</p>
        </div>
    )
}

export default InputCustom
