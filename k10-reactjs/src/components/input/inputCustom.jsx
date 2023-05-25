import { useState } from "react";
import styles from "./style.module.scss";

const InputCustom = ({ label, type, error, onChange = () => { }, name, placeholder, validate }) => {

  return (
    <div className={styles.inputCom}>
      <label>{label}</label>
      <div>
        <input
          name={name}
          onChange={(e) => onChange(e.target)}
          type={type}
          placeholder={placeholder}
          valid={validate}
        />
        <p className={styles.pEle}>{error}</p>
      </div>
    </div>
  );
};
export default InputCustom;
