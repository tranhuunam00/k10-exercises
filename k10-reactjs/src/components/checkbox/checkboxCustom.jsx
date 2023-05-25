import style from "./style.module.scss";

const CheckBoxCustom = ({ type, text, onChange = () => { } }) => {
    return <div className={style.input}><input onChange={onChange} type={type} />{text}</div>;
};

export default CheckBoxCustom;
