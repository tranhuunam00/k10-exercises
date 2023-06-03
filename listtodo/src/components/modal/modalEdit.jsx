import {useState } from "react";
import InputCustom from "../InputCustom/InputCustom";
import IMAGE_APP from "../../assets/image";
import styles from './style.module.scss'

const ModalEdit = ({ cloneModal }) => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');

    const handleClickSave = () => {

    }
    const handleClickRemoveModal = () => {
        cloneModal(false)
    }

    return (
        <div className={styles.modal}>
            <div className={styles.imgRemoveModal}>
                <img src={IMAGE_APP.iconRemoveModal} alt="" onClick={() => { handleClickRemoveModal() }} />
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
                <button className={styles.btn_item} disabled={!username || !email} onClick={() => { handleClickSave() }}  >Save</button>
                <button className={styles.btn_item} onClick={() => { handleClickRemoveModal() }}  >Cancel</button>
            </div>
        </div>
    )
}
export default ModalEdit