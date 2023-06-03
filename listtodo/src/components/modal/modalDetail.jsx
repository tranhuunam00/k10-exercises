import styles from './style.module.scss'
import IMAGE_APP from "../../assets/image";
import { useContext, useState } from 'react';
import { DataContext } from '../../App';
const ModalDetail = ({ cloneModal }) => {
  const listTodo = useContext(DataContext)

  const handleClickRemoveModal = () => {
    cloneModal(false)
  }
  return (
    <div className={styles.modal}>
      <div className={styles.imgRemoveModal}>
        <img src={IMAGE_APP.iconRemoveModal} alt="" onClick={() => { handleClickRemoveModal() }}></img>
      </div>
      <h1 style={{ textAlign: 'center' }}>Modal Detail</h1>
      <div>
        {listTodo.map((value, index) => {
          return (
            <div key={value.id}>
              <div className={styles.content}>
              <h3>Username: </h3>
              {value.name}
              </div>
              <div className={styles.content}>
              <h3>Email: </h3>
              {value.email}
              </div>
            </div>
          )
        })}
       
      </div>

      <div className={styles.btn}>
        <button className={styles.btn_item} onClick={() => { handleClickRemoveModal() }}>Cancel</button>
      </div>
    </div>
  );
};
export default ModalDetail;
