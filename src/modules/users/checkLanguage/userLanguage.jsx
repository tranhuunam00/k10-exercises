import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import styles from "./styles.module.scss"
import ButtonCustom from '../../../components/button/ButtonCustom';
import { useNavigate } from 'react-router';
import { useContext } from "react";
import { locales } from '../../../components/multiLanguage/i18next/i18next';
import Context from "../../../store/context";

const UserLanguage = () => {
    const navigate = useNavigate()
    const [state, dispatch] = useContext(Context);
    const handleOnClick = () => {
        return navigate(`/auth/LoginPage`)
    }
    const { t, i18n } = useTranslation("translation");

    const changeLanguage = (e) => {
        const languageValue = e.target.value // lấy value của thẻ select
        i18n.changeLanguage(languageValue); // sau khi lấy được value sẽ gửi về i18n để xử lí
        localStorage.setItem("languageValue", languageValue)
    }
    const language = localStorage.getItem("languageValue")
    return (
        <div className={styles.content}>
            <h1>{t("title")}</h1>
            <select onChange={changeLanguage}>
                <option selected={language === "eng" ? true : false} value="eng">English</option>
                <option selected={language === "vie" ? true : false} value="vie">Vietnamese</option>
                <option selected={language === "rus" ? true : false} value="rus">Russian</option>
            </select>
            <ButtonCustom type={"button"} text={"Back"} onClick={handleOnClick} />
        </div>
    )
}

export default UserLanguage