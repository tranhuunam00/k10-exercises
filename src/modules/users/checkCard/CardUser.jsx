import CardCustom from "../../../components/card/CardCustom"
import styles from "./styles.module.scss"
const CheckCardUser = () => {
    const user = {
        name : "Khuong",
        detailUser : "Lập trình viên",
        img : "https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png"
    }
    return (
        <div className={styles.content}>
            <CardCustom nameUser={user.name} detailUser={user.detailUser} imgUser={user.img}/>
        </div>
    )
}
export default CheckCardUser