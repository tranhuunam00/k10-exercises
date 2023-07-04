import React from 'react'
import { useTranslation } from 'react-i18next';
import i18n from "i18next";
import styles from "./styles.module.scss"
import ButtonCustom from '../../../components/button/ButtonCustom';
import { useNavigate } from 'react-router';

const UserLanguage = () => {
    const navigate = useNavigate()
    const handleOnClick = () => {
        return navigate(`/auth/LoginPage`)
    }
    const { t } = useTranslation("translation");
    // console.log(useTranslation())

    const changeLanguage = (e) => {
        const languageValue = e.target.value // lấy value của thẻ select
        i18n.changeLanguage(languageValue); // sau khi lấy được value sẽ gửi về i18n để xử lí
    }
    return (
        <div className={styles.content}>
            <h1>{t("title")}</h1>
            <select onChange={changeLanguage}>
                <option value="eng">English</option>
                <option value="vie">Vietnamese</option>
                <option value="rus">Русский</option>
            </select>
            <ButtonCustom text={"Back"} onClick={handleOnClick}/>
        </div>
    )
}

export default UserLanguage