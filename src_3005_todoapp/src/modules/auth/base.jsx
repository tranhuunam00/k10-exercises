import React, { useState } from 'react'
import Table_card from '../../components/card/cardTable'
import { toast, ToastContainer } from 'react-toastify'
import styles from './style.module.scss'
const BasePage = () => {
    const [arr_header, setArr_header] = useState([])
    const [arr_values, setArr_value] = useState([])

        
    const handleAPI = () => {
        console.log("Bạn không sợ gì cả!")
    };


    return (
        <div className={styles.table}>
            <h1>Bạn không sợ gì cả</h1>
            <button onClick={handleAPI}>GET_API</button>
            <Table_card
                arr_header={arr_header}
                arr_value={arr_values.map((value, index) => {
                    return value
                })}
            />
        </div>
    )
}

export default BasePage
