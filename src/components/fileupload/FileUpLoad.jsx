import { useState } from "react";
import IMAGE_APP from "../../assets/images.assets"
import styles from "./styles.module.scss"

const FileUpLoad = props => {
    console.log("props", props)

    const [fileList, setFileList] = useState([]);
    console.log("fileList", fileList)
    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        console.log("newFile", newFile)
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
    }
    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }
    return (
        <>
            <div className={styles.file_card}>

                <div className={styles.file_inputs} onChange={onFileDrop}>
                    <input type="file" />
                    <button>
                        <img src={IMAGE_APP.iconUploader} alt="" />
                        Upload
                    </button>
                </div>

                <p className={styles.main}>Supported files</p>
                <p className={styles.info}>PDF, JPG, PNG</p>

            </div>
            {
                fileList.length > 0 ? (
                    <div>
                        <p>Ready to upload</p>
                        {
                            fileList.map((value, index) => (
                                <div key={index}>
                                    <div className={styles.itemFile}>
                                        <p>Name: {value.name}</p>
                                        <p>Data: {value.size}</p>
                                        <span onClick={() => fileRemove(value)}>x</span>
                                    </div>

                                </div>


                            ))
                        }
                    </div>
                ) : null
            }
        </>
    )
}
export default FileUpLoad