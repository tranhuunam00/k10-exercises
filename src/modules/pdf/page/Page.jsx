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
  const [page, setPage] = useState({ start: 1, end: 2 });

  const handleUpload = async () => {
    if (selectedFile) {
      setIsLoading(true);
      if (page.end < page.start) {
        alert("Vui lòng nhập lại page");
      }
      const pages = [];
      for (let i = page.start; i <= page.end; i++) {
        pages.push(i);
      }

      const formData = new FormData();
      formData.append("paper", selectedFile);
      formData.append("pages", JSON.stringify(pages));

      try {
        const response = await apiClient.post("/upload-paper", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setPaperInit(response.data.data);
        const chatPromt =
          "Hãy phân tích như 1 chuyên gia với đoạn báo sau : " +
          response.data.data +
          " Và chuẩn bị trả lời những câu hỏi sắp tới đây của tôi như chuyên gia";
        const newMessageList = [
          ...messageList,
          { content: chatPromt, role: "user" },
        ];
        const resChat = await handleChat(JSON.stringify(newMessageList));
        newMessageList.push({
          content: resChat.data.data,
          role: "assistant",
        });
        setMessageList(newMessageList);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleChat = async (messages) => {
    return await apiClient.post("/chat", {
      messages: messages,
    });
  };

  const changePage = (e) => {
    const { name, value } = e.target;
    const newPage = { ...page, [name]: +value };
    setPage(newPage);
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
        <input
          type="number"
          placeholder="Start"
          name="start"
          onChange={changePage}
        />
        <input
          type="number"
          placeholder="End"
          name="end"
          onChange={changePage}
        />
        <button onClick={handleUpload} disabled={isLoading}>
          {isLoading ? "Loading" : "Upload"}
        </button>
      </div>
      <div className={styles.page_content}>
        <div className={styles.page_content_chat}>
          {messageList.map((mes, index) => (
            <CardChat key={index} text={mes.content} isMe={mes.isMe} />
          ))}
        </div>
        <div className={styles.page_content_input}>
          <input
            placeholder="Nhập câu hỏi"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
          <button
            disabled={isLoading}
            onClick={async () => {
              setIsLoading(true);
              const newMessageList = [
                ...messageList,
                { content: text, role: "user" },
              ];
              const resChat = await handleChat(JSON.stringify(newMessageList));
              newMessageList.push({
                content: resChat.data.data,
                role: "assistant",
              });
              setMessageList(newMessageList);
              setText("");
              setIsLoading(false);
            }}
          >
            {isLoading ? "Send" : "Loading"}
          </button>
        </div>
      </div>
    </div>
  );
}
