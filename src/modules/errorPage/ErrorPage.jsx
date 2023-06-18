import React from "react";
import styles from "./styles.module.scss"
const ErrorPage = () => {
    const message = {
        title  : "Uh - Oh...",
        detail : "The page you are looking for may have been moved, deleted or possibly never existed",
        error_code : "404"
    }
    return (
        <div className={styles.message}>
            <h1 className={styles.title}>
                {message.title}
            </h1>
            <label className={styles.detail}>{message.detail}</label>
            <p className={styles.error_code}>{message.error_code}</p>

        </div>
    )
}
export default ErrorPage