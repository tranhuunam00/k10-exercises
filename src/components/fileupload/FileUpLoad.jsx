import { useState } from "react";
import IMAGE_APP from "../../assets/images.assets"
import styles from "./styles.module.scss"

const FileUpLoad = () => {

    const [fileList, setFileList] = useState([]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file.type === "image/jpeg" || file.type === "image/png") {
            const updatedList = [...fileList, file];
            setFileList(updatedList);

        } else {
            alert("Vui lòng chọn tệp hình ảnh JPEG hoặc PNG.");
            e.target.value = null;
        }

    }
    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
    }
    return (
        <>
            <div className={styles.file_card}>

                <div className={styles.file_inputs} onChange={handleFileChange}>
                    <input accept="image/png , image/jpeg" type="file" />
                    <button>
                        <img src={IMAGE_APP.iconUploader} alt="" />
                        Upload
                    </button>
                </div>

                <p className={styles.main}>Supported files</p>
                <p className={styles.info}>JPG, PNG</p>

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