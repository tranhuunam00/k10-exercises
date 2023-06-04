import { useState, useContext } from "react";
import InputCustom from "../InputCustom/InputCustom";
import IMAGE_APP from "../../assets/image";
import styles from './style.module.scss'
import { DataContext } from "../../App";

const ModalEdit = ({ cloneModal }) => {
    const { locationDataEdit, handleCLickEditItem } = useContext(DataContext)
    const id = locationDataEdit.id
    const [username, setUsername] = useState(locationDataEdit.name);
    const [email, setEmail] = useState(locationDataEdit.email);
    const dataUser = {
        id : id,
        name : username,
        email : email
    }
    return (
        <div className={styles.modal}>
            <div className={styles.imgRemoveModal}>
                <img src={IMAGE_APP.iconRemoveModal} alt="" onClick={() => { cloneModal(false) }} />
            </div>
            <InputCustom value={username} label={"Username"} onChange={(e) => {
                const { value } = e;
                setUsername(value)
            }} />
            <InputCustom value={email} label={"Email"} onChange={(e) => {
                const { value } = e;
                setEmail(value)
            }} />
            <div className={styles.btn}>
                <button className={styles.btn_item} disabled={!username || !email} onClick={() => { handleCLickEditItem({dataUser}, cloneModal(false)) }}>Save</button>
                <button className={styles.btn_item} onClick={() => { cloneModal(false) }}  >Cancel</button>
            </div>
        </div>
    )
}
export default ModalEdit