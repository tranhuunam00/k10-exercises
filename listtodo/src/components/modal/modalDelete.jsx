import { useContext, useState } from "react";
import styles from './style.module.scss'
import IMAGE_APP from "../../assets/image";
import { DataContext } from "../../App";
const ModalDelete = ({ listTodo , cloneModal}) => {

  const { handleCLickImgDelete } = useContext(DataContext)

console.log(listTodo)
  const handleClickRemoveModal = () => {
    cloneModal(false)
  }
  const handleClickSave = () => {
    // const removeList = listTodo.filter((value) => value.id !== id);
    // setListTodo(removeList);
  }
  return (
    <div className={styles.modal}>
      <div className={styles.imgRemoveModal}>
        <img src={IMAGE_APP.iconRemoveModal} alt="" onClick={() => { handleClickRemoveModal() }}></img>
      </div>
      <div className={styles.title}>
        <h1>Modal Delete</h1>
        <h2>Bạn có chắc chắn muốn xóa </h2>
      </div>

      <div className={styles.btn}>
        <button className={styles.btn_item} onClick={() => { handleClickSave() }}>Delete</button>
        <button className={styles.btn_item} onClick={() => { handleClickRemoveModal() }}>Cancel</button>
      </div>
    </div>
  );
};
export default ModalDelete;
