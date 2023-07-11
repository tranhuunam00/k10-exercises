import React, { useState } from 'react'
import styles from "./styles.module.scss"
import FileUpLoad from '../../../components/fileupload/FileUpLoad'
// user
const Uploader = () => {
    return (
        <div className={styles.main}>
            <h2 className={styles.title}>UpLoad File</h2>
            <FileUpLoad/>
        </div>
    );
}

export default Uploader