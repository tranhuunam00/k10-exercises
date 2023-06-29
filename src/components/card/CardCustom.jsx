import styles from "./styles.module.scss"
import IMAGE_APP from "../../assets/images.assets"

const CardCustom = ({ imgUser, nameUser, detailUser }) => {
    return (
        <div className={styles.picture}>
            <div className={styles.IMG_user}>
                <img src={imgUser} alt="" />
            </div>
            <p className={styles.titleUser}>
                {nameUser}
                <span>{detailUser}</span>
            </p>
            <div className={styles.social}>
                <a href="#">
                    <img src={IMAGE_APP.iconFB} alt="" />
                    <span className={styles.tooltip_social}>Facebook</span>
                </a>
                <a href="#">
                    <img src={IMAGE_APP.iconTwitter} alt="" />
                    <span className={styles.tooltip_social}>Twitter</span>
                </a>
                <a href="#">
                    <img src={IMAGE_APP.iconInstagram} alt="" />
                    <span className={styles.tooltip_social}>Instagram</span>
                </a>
                
            </div>
        </div>
    )
}
export default CardCustom