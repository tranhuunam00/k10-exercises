import React, { useEffect, useRef, useState } from 'react'
import styles from './style.module.scss'
import InputCustom from '../../../components/input/inputText'
import IMAGE_APP from '../../../assets/image'
import { useStore } from '../../../context/hooks'
import { ToastContainer, toast } from 'react-toastify'

const Model_Edit = () => {
    const arr_header = ['STT', 'ID', 'Name', 'Email', 'Edit', 'Delete']
    const [arr_value, setArr_value] = useState([])
    const [state, dispatch] = useStore()
    const { listUser, isOpenModel, dataMoel } = state

    useEffect(() => {

        const GET_DATA_USER = async () => {
            try {
                const reponse = await fetch(
                    'https://jsonplaceholder.typicode.com/users'
                )
                const resuft = await reponse.json()
                setArr_value(resuft)
                console.log('Thành công', arr_value)
            } catch (error) {
                console.log('Error: ', error)
            }
        }
        GET_DATA_USER()
        console.log('Vi')
    }, [])

    // Input and Validate
    const [new_user, setNew] = useState({
        username: null,
        email: null,
    })

    const [errorShow, setErrorShow] = useState({
        errorText_email: '',
    })

    const validate = (input, value, set_errorText) => {
        if (
            input === 'email' &&
            !/^[a-zA-Z0-9._]+@+[a-zA-Z0-9-]+\.[a-zA-Z.-]{2,}$/.test(value)
        ) {
            setErrorShow({
                ...errorShow,
                [set_errorText]: 'Không thể xác định email',
            })
        } else {
            setNew({ ...new_user, [input]: value })
            setErrorShow({ ...errorShow, [set_errorText]: '' })
        }
    }

    const handleInput = (e) => {
        const { name, value } = e
        if (name === 'username') {
            validate(name, value)
        } else {
            validate(name, value, 'errorText_email')
        }
    }

    const handleADD = () => {
        if (Object.values(new_user).some((value) => !value)) {
            toast.error('Bạn cần nhập đủ thông tin', { autoClose: 500 })
        } else {
            console.log(listUser)
            setArr_value([
                ...arr_value,
                {
                    id: Math.floor(Math.random() * 100000),
                    name: new_user.username,
                    email: new_user.email,
                },
            ])
        }
    }

    const handleEdit = (data) => {}

    const handelDelete = (data) => {
        const delete_user = arr_value.filter((user) => user.id !== data.id)
        setArr_value(delete_user)
    }

    return (
        <form
            className={styles.todoapp}
            onSubmit={(e) => {
                e.preventDefault()
            }}
        >
            <div>
                <h1>Xin chào!</h1>
                <h4>Chào mừng đến với !</h4>
            </div>

            <div className={styles.add}>
                <h3>Add User</h3>
                <div className={styles.input}>
                    <InputCustom
                        label={'Name'}
                        name={'username'}
                        ICON={IMAGE_APP.user}
                        text={'Enter your username'}
                        onChange={handleInput}
                    />
                    <InputCustom
                        label={'Email'}
                        name={'email'}
                        ICON={IMAGE_APP.email}
                        text={'Enter your email'}
                        onChange={handleInput}
                        error={errorShow.errorText_email}
                    />
                </div>
                <button
                    type="reset"
                    className={styles.buttonADD}
                    onClick={handleADD}
                >
                    Lưu
                </button>
                <ToastContainer />
            </div>
        </form>
    )
}

export default Model_Edit
