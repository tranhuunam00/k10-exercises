import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import English from "../language/eng.json";
import Vietnamese from "../language/vie.json";
import Russian from "../language/rus.json";



const resources = {
    eng: {
        translation: English,
    },
    vie: {
        translation: Vietnamese,
    },
    rus: {
        translation: Russian,
    },
};

i18n
    .use(initReactI18next) // cho phép dùng thư viện ngoài gài vào i18n, chuyển i18n thành react-i18next
    .init({ // mặc định của i18n sẵn sàng được khởi tạo bằng cách gọi init
        resources, //khởi tạo
        lng:localStorage.getItem("languageValue") || "eng", // ngôn ngữ sử dụng (tính năng ghi đè nhau)
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
