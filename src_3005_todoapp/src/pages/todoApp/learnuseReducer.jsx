import React, { useContext, useReducer } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import UserProvider from '../../context/user.provider'
import UserContext from '../../context/user.context'

const LearnuseReducer = ({ value, index, onDeletee }) => {

    console.log(UserContext)
    // const [{ listUser, isOpenModal }, dispatch] = useContext(UserContext)

    console.log(useContext)
    return (
        <div>
            {/* <h1>{value}</h1> */}
            <button
                // onClick={() => {
                //     console.log(value)
                //     dispatch({ type: 'SHOW_MODAL', payload: value })
                // }}
            >
                ADD
            </button>
            <ToastContainer />
            {/* <button onClick={() => dispatch()}>DELETE</button> */}
            <ToastContainer />
        </div>
    )
}

export default LearnuseReducer