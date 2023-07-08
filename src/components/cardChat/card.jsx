import styles from "./styles.module.scss";
const CardChat = ({ text, isMe }) => {
  return (
    <div className={styles.card}>
      <p
        className={styles.card_area}
        style={{
          backgroundColor: isMe
            ? "rgba(144, 198, 241, 0.2)"
            : "rgba(144, 198, 241, 0.2)",
          width: "80%",
          left: isMe ? "40%" : 0,
          // height: "80%",
        }}
      >
        {text}
      </p>
    </div>
  );
};
export default CardChat;
