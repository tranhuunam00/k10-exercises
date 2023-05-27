import React from 'react'
import styles from './style.module.scss'

const Table_card = ({ arr_header, arr_value }) => {
    return (
        <table border="1" >
            <tr>
                {arr_header.map((value, index) => {
                    return <th key={index}>{value}</th>
                })}
            </tr>
            <tr>
                {arr_value.map((value, index) => {
                    return<td key={index}>{value}</td>
                })}
            </tr>
        </table>
    )
}

export default Table_card
