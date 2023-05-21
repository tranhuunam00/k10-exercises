import React, { useEffect, useState } from "react";
import axios from "axios"
export default function GetDataJson() {
    const [data, setData] = useState([])
    const getData = async () => {
        try {
            const data = await axios.get('https://jsonplaceholder.typicode.com/users');// chuyển json thành obj
            setData(data.data)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>stt</td>
                        <td>id</td>
                        <td>name</td>
                        <td>email</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value, keys) => {
                        return <tr key={keys}>
                            <td>{keys}</td>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}