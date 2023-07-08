import { useState } from "react";
import CardChat from "../../../components/cardChat/card";
import styles from "./styles.module.scss";
import apiClient from "../../../api/client";
export default function PagePdf() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [paperInit, setPaperInit] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");

  const handleUpload = async () => {
    if (selectedFile) {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("paper", selectedFile);
      try {
        const response = await apiClient.post("/upload-paper", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("response.data", response.data);
        setPaperInit(response.data);
        setMessageList([
          ...messageList,
          { text: response.data.data, isMe: false },
        ]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.page_sidebar}>
        <input
          type="file"
          onChange={(event) => {
            setSelectedFile(event.target.files[0]);
          }}
        ></input>
        <input type="number" placeholder="Start" />
        <input type="number" placeholder="End" />
        <button onClick={handleUpload} disabled={isLoading}>
          {isLoading ? "Loading" : "Upload"}
        </button>
      </div>
      <div className={styles.page_content}>
        <div className={styles.page_content_chat}>
          {messageList.map((mes, index) => (
            <CardChat key={index} text={mes.text} isMe={mes.isMe} />
          ))}
        </div>
        <div className={styles.page_content_input}>
          <input
            placeholder="Nhập câu hỏi"
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              setMessageList([...messageList, { text: text, isMe: true }]);
              setText("");
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
