import React from 'react';

const CustomInput = ({ label, icon, value, onChange }) => {
  return (
    <div className="input-field">
      <input type="text" required value={value} onChange={onChange} />
      <label>{icon} {label}</label>
    </div>
  );
}

export default CustomInput;
