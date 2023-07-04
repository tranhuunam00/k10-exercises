import styles from "./styles.module.scss"

const ButtonCustom = ({ text, onClick = () => { },id ,type}) => {
  return <div><button type={type} className={styles.button} id={id} onClick={onClick}>{text}</button></div>;
};

export default ButtonCustom;