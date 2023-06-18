import styles from "./styles.module.scss"

const ButtonCustom = ({ text, onClick = () => { },id }) => {
  return <div><button className={styles.button} id={id} onClick={onClick}>{text}</button></div>;
};

export default ButtonCustom;