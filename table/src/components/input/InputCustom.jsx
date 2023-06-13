import React from 'react'

export default function ({ value, type, onChange = () => { }, name, placeholder }) {
    return (
        <div>
            <label></label>
            <input value={value} type={type} onChange={(e) => { onChange(e.target) }} placeholder={placeholder} name={name} />
        </div>
    )
}
