import { useState } from "react"
import IMAGE_APP from "../../../assets/images.assets"
import styles from "./styles.module.scss"

const AvatarUser = () => {

    const [image, setImage] = useState(null)
    const [previewUrl, setPreviewUrl] = useState(null);

    
    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === "image/png") {
            setImage(file)
        } else {
            setImage(null)
            alert("Ảnh không hợp lệ")
        }
        const reader = new FileReader();
        reader.onload = () => {
            setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);
    }

    return (
        <div className={styles.content}>

            <h2>Avatar</h2>
            <div>

                <img className={styles.imgUser} src={previewUrl ? previewUrl : IMAGE_APP.img_user} alt="" />
                <div className={styles.btnCamera} onChange={handleAvatarChange}>
                    <input type="file" accept="image/png"></input>
                    <button>
                        <img className={styles.imgCamera} src={IMAGE_APP.iconCamera} alt="" />
                    </button>
                </div>
            </div>


        </div>
    )
}
export default AvatarUser