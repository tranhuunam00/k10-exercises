import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import InputCustom from '../../components/input/inputCustom'
import ButtonCustom from '../../components/button/buttonCustom'
import IMAGE_APP from '../../assets/image'
const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')
    const ERROR_CHECK_LIST_TYPE = {
        required: 'Bạn phải nhập trường này',
        minlength: 'Yêu cầu tối thiểu ',
        maxlength: 'Yêu cầu tối đa',
        hasOneUpperCase: 'Yêu cầu ít nhất 1 ký tự hoa',
        option: 'Yêu cầu chọn trường',
        isEmail: 'Yêu cầu đúng định dạng email',
        sex: 'Vui lòng chọn giới tính',
        maxDay: 'Vui lòng không chọn ngày lớn hơn hôm nay',
    }

    const parseValid = (validString) => {
        if (!validString) return {}
        const listValid = validString.split('|')
        return listValid.reduce((pre, curr) => {
            const [key, value = true] = curr.split(':')
            return { ...pre, [key]: value }
        }, {})
    }

    const validate = (type = 'username', value, listError = {}) => {
        let error = null

        for (let key in listError) {
            switch (key) {
                case 'required':
                    error = !value ? ERROR_CHECK_LIST_TYPE[key] : null
                    break
            }
            if (error) {
                break
            }
        }
        return error
    }
    const [listError, setListError] = useState({
        username: null,
        password: null,
    })

    const [formValue, setFormValue] = useState({
        username: null,
        password: null,
    })

    const handleChangeInput = (event) => {
        const { name, value, checked } = event
        if (name === 'username') setUsername(value)
        if (name === 'password') setpassword(value)
        const inputValue = value
        const valid = event.getAttribute('valid')
        const error = validate(name, inputValue, parseValid(valid))
        setListError({ ...listError, [name]: error })
        console.log(listError.username)
    }
    const handleSubmit = (event) => {
        const pErrorLogin = document.querySelector('#pErrorLogin')
        async function postJSON(data) {
            console.log(data)
            try {
                const response = await fetch(
                    'http://3.85.3.86:9001/api/auth/login',
                    {
                        method: 'POST', // or 'PUT'
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                    }
                )
                const result = await response.json()
                console.log('Success:', result)
                if (result.success === false) {
                    toast.error('False')
                    pErrorLogin.innerHTML = 'Username or password incorrect'
                } else {
                    toast.success('Success')
                    pErrorLogin.innerHTML = ''
                    console.log(pErrorLogin)
                }
            } catch (error) {
                console.error('Error:', error)
            } finally {
            }
        }

        postJSON({ username, password })
        console.log(username, password)
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <img src={IMAGE_APP.iconMain} alt="" />
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            >
                <div className="form-group">
                    <InputCustom
                        onChange={handleChangeInput}
                        label={'Username'}
                        type={'text'}
                        name={'username'}
                        valid={'required|minlength:6|maxlength:12'}
                        placeholder={'Username'}
                    />
                </div>
                <div className="form-group">
                    <InputCustom
                        label={'Password'}
                        type={'text'}
                        onChange={handleChangeInput}
                        name={'password'}
                        valid={'required|hasOneUpperCase|minlength:8'}
                        placeholder={'Password'}
                    />
                </div>
                <p
                    id="pErrorLogin"
                    style={{
                        color: 'red',
                        fontSize: '14px',
                        fontStyle: 'italic',
                    }}
                ></p>
                <ButtonCustom
                    id={'button_register'}
                    label={'Login'}
                    type={'submit'}
                    onClick={handleSubmit}
                />
            </form>
            <ToastContainer />
        </div>
    )
}

export default Login
