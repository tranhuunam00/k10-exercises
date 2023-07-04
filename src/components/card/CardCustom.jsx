import styles from "./styles.module.scss"
import IMAGE_APP from "../../assets/images.assets"

const CardCustom = ({ imgUser, nameUser, detailUser, onChangeFB = () => { }, onChangeTW = () => { }, onChangeINS = () => { } }) => {
    return (
        <div className={styles.picture}>
            <div className={styles.IMG_user}>
                <img src={imgUser} alt="" />
            </div>
            <p className={styles.titleUser}>
                {nameUser}
                <span>{detailUser}</span>
            </p>
            <hr/>
            <div className={styles.social}>
                <div className={styles.imgIcon}>
                    <img src={IMAGE_APP.iconFB} alt="" onChange={onChangeFB} />
                    <span className={styles.tooltip_social}>Facebook</span>
                </div>
                <div className={styles.imgIcon}>
                    <img src={IMAGE_APP.iconTwitter} alt="" onChange={onChangeTW} />
                    <span className={styles.tooltip_social} >Twitter</span>
                </div>
                <div className={styles.imgIcon}>
                    <img src={IMAGE_APP.iconInstagram} alt="" onChange={onChangeINS} />
                    <span className={styles.tooltip_social}>Instagram</span>
                </div>

            </div>
        </div>
    )
}
export default CardCustom