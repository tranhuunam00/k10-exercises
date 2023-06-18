import styles from './styles.module.scss'

const InputTextCustom = ({ label, name, placeholder, value, type, error, icon, onChange = () => { } ,validate}) => {
    return (
        <div>
            <label>{label}</label>
            <div className={styles.inputCom}>
                <img src={icon} alt='' />
                <input name={name} placeholder={placeholder} onChange={(e) => onChange(e.target)} value={value} type={type} valid={validate}/>
                <p className={styles.error}>{error}</p>
            </div>
        </div>
    )
}

export const InputRadioCustom = ({ label, name, value, id, onChange = () => { }, checked }) => {
    return (
        <div>
            <input type='radio' name={name} id={id} value={value} onChange={onChange} checked={checked} /> <label>{label}</label>
        </div>
    )
}
export const CheckBoxCustom = ({ type, text, onChange = () => { } }) => {
    return <div className={styles.input}><input onChange={onChange} type={type} />{text}</div>;
};
export default InputTextCustom