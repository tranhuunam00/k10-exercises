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
    .use(initReactI18next) // có để tải các plugin bổ sung vào i18next.
    .init({ // mặc định của i18n sẵn sàng được khởi tạo bằng init 
        resources, //khởi tạo
        lng: "eng", // ngôn ngữ sử dụng (tính năng ghi đè nhau)
    });

export default i18n;
