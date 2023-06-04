import { useContext, useState } from "react";
import styles from './style.module.scss'
import IMAGE_APP from "../../assets/image";
import { DataContext } from "../../App";
const ModalDelete = ({ cloneModal }) => {
  const { handleCLickDeleteItem , locationDataDelete } = useContext(DataContext)
  return (
    <div className={styles.modal}>
      <div className={styles.imgRemoveModal}>
        <img src={IMAGE_APP.iconRemoveModal} alt="" onClick={() => { cloneModal(false) }}></img>
      </div>
      <div className={styles.title}>
        <h1>Modal Delete</h1>
        <h2>Bạn có chắc chắn muốn xóa {locationDataDelete.name} không ?</h2>
      </div>

      <div className={styles.btn}>
        <button className={styles.btn_item} onClick={() => { handleCLickDeleteItem(cloneModal(false)) }}>Delete</button>
        <button className={styles.btn_item} onClick={() => { cloneModal(false) }}>Cancel</button>
      </div>
    </div>
  );
};
export default ModalDelete;
