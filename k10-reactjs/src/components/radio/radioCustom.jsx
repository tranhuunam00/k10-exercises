import styles from "./style.module.scss";

const RadioCustom = ({ label, type, name, value, id, onChange = () => {} ,checked}) => {
  return <div>
    <input type={type} name={name} id={id} value={value} onChange={onChange} checked={checked}/> <label>{label}</label>
  </div>;
};

export default RadioCustom;
