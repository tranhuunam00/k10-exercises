import React, { useState } from 'react'
import styles from "./styles.module.scss"
import FileUpLoad from '../../../components/fileupload/FileUpLoad'
// user
const Uploader = () => {
    const onFileChange = (files) => {
        console.log(files);
    }
    return (
        <div className={styles.main}>
            <h2 className={styles.title}>UpLoad File</h2>
            <FileUpLoad onFileChange={(files) => onFileChange(files)} />
        </div>
    );
}

export default Uploader