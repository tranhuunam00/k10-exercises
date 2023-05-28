import React from 'react'
import styles from './style.module.scss'

const Table_card = ({ arr_header, arr_value }) => {
    return (
        <table border="1" className={styles.table}>
            <tr>
                {arr_header.map((value, index) => {
                    return (
                        <th className={styles.tr} key={index}>
                            {value}
                        </th>
                    )
                })}
            </tr>
            {arr_value.map((value, index) => {
                return <tr key={index}>
                    {Object.values(value).map((value, index) => {
                        return (
                            <th className={styles.tr} key={index}>
                                {value}
                            </th>
                        )
                    })}
                </tr>
            })}
        </table>
    )
}

export default Table_card
