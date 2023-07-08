import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:9001/api", // Thay đổi đường dẫn tới API của bạn
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export default apiClient;
