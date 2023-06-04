import styles from './style.module.scss'
import IMAGE_APP from "../../assets/image";
import { useContext, useState } from 'react';
import { DataContext } from '../../App';
const ModalDetail = ({ cloneModal }) => {
  const { locationDataDetail } = useContext(DataContext)
  return (
    <div className={styles.modal}>
      <div className={styles.imgRemoveModal}>
        <img src={IMAGE_APP.iconRemoveModal} alt="" onClick={() => { cloneModal(false) }}></img>
      </div>
      <h1 style={{ textAlign: 'center' }}>Modal Detail</h1>
      <div>
        <div>
          <div className={styles.content}>
            <h2>Username: </h2>
            <h3>{locationDataDetail.name}</h3>
          </div>
          <div className={styles.content}>
            <h2>Email: </h2>
            <h3>{locationDataDetail.email}</h3>
          </div>
        </div>
      </div>

      <div className={styles.btn}>
        <button className={styles.btn_item} onClick={() => { cloneModal(false) }}>Cancel</button>
      </div>
    </div>
  );
};
export default ModalDetail;
