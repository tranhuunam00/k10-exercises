import IMAGE_DROPDOWN from './assetsDropdown/image';
import styles from './styles.module.scss';

const DropdownCustom = (listFilter = {}, onClick = () => { }, className) => {
  return(
    <div className={styles.DropdownCustom_box}>
        <div>
            1
        </div>
        <div style={{backgroundColor: 'black'}}>
            <img src={IMAGE_DROPDOWN.downAllow} alt="" />
        </div>
    </div>
  )
  
}
export default DropdownCustom;