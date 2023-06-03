import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useStore } from '../../context'
import ButtonCustom from '../../components/button/button'
import InputCustom from '../../components/input/inputText'

const LearnuseReducer = () => {
    const [{ listUser, isOpenModel, dataModel }, dispatch] = useStore()

    return (
        <form>
            <div>
                {listUser.map((value, index) => {
                    return (
                        <tr>
                            {value.map((value, index) => {
                                return value.map((val) => {
                                    return <tb>{val}</tb>
                                })
                            })}
                        </tr>
                    )
                })}
            </div>
            <InputCustom name={'username'} />
            <ButtonCustom type={'reset'} text={'Click đi nào!'} />
        </form>
    )
}

export default LearnuseReducer
