import Styles from './Style.module.scss'

import { useState } from 'react'

const InputPlanet
 = ({ label, type, error, onChange = () => {}, name }) => {
    return (
        <div className={Styles.inputGroup}>
            <label htmlFor="">{label}</label>
            <input
                type={type}
                onChange={(e) => {
                    onChange(e.target)
                }}
                name={name}
            />
            <p>{error}</p>
        </div>
    )
}

export default InputPlanet