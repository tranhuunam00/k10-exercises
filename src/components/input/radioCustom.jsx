import styles from './style.module.scss'

const RadioCustum = ({
    male,
    female,
    type,
    error,
    onChange = () => {},
    name,
    valueMale,
    valueFemale,
}) => {
    return (
        <div>
            <h5>{name}</h5>
            <div>
                <label>{male}</label>
                <input
                    type={type}
                    onChange={(e) => onChange(e.target)}
                    name={name}
                    value={valueMale}
                />
                <label>{female}</label>
                <input
                    type={type}
                    onChange={(e) => onChange(e.target)}
                    name={name}
                    value={valueFemale}
                />
            </div>
            <p>{error}</p>
        </div>
    )
}
export default RadioCustum
