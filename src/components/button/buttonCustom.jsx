import styles from './style.module.scss'

const ButtonCustom = ({id, label, type, onClick = () => {} }) => {
    return (
        <div>
            <button id={id} type={type} onClick={(e)=>{onClick(e.target)}}>{label}</button>
        </div>
    )
}
export default ButtonCustom
