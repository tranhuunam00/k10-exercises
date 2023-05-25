import style from "./style.module.scss";

const ButtonCustom = ({ text, onClick = () => { },id }) => {
  return <div><button id={id} onClick={onClick}>{text}</button></div>;
};

export default ButtonCustom;
