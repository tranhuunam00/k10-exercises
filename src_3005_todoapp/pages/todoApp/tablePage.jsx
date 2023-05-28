import React, { useEffect, useState } from 'react'
import Table_card from '../../components/card/cardTable'
import { toast, ToastContainer } from 'react-toastify'

import styles from './style.module.scss'
const BasePage = () => {
    const [arr_header, setArr_header] = useState([])
    const [arr_value, setArr_value] = useState([])

    const [data, setData] = useState([])
    const api_read = 'https://jsonplaceholder.typicode.com/users'

    async function GET_API(api) {
        try {
            const reponse = await fetch(api)
            const resuft = await reponse.json()
            if (reponse.ok) {
                toast.success('Thành công!', { autoClose: 500 })
                setData(resuft)
            } else {
                toast.error(resuft.message)
            }
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    const handleAPI = () => {
        GET_API(api_read)
        // console.log('jsonData', data)

        data.map((obj) => {
            setArr_header(Object.keys(obj))
            let value = Object.values(obj).map((val) =>
                typeof val === 'object' ? JSON.stringify(val) : val.toString()
            )

            setArr_value(value)
        })
    }
    // console.log(arr_header)
    // console.log(arr_value, typeof arr_value[0])
    return (
        <div className={styles.table}>
            <button onClick={handleAPI}>GET_API</button>
            <ToastContainer />

            <Table_card
                arr_header={arr_header}
                arr_value={arr_value.map((value) => {
                    return <td className={styles.tr}>{value}</td>
                })}
            />
        </div>
    )
}

export default BasePage
