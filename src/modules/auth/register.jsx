import React, { useState } from 'react'
import IMAGE_APP from '../../assets/image'
import InputCustom from '../../components/input/inputCustom'
import RadioCustum from '../../components/input/radioCustom'
import ButtonCustom from '../../components/button/buttonCustom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const RegisterPage = () => {
    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')
    const [sex, setsex] = useState('')
    const [dOB, setdOB] = useState('')

    const ERROR_CHECK_LIST_TYPE = {
        required: 'ban phai nhap truong nay',
        minlength: 'Yeu cau toi thieu',
        maxlength: 'Yeu cau toi da',
        hasOneUpperCase: 'Yeu cau it nhat 1 ky tu in hoa',
        isEmail: 'Vui long dung dinh dang email',
        option: 'vui long con ngay',
        maxDay: 'Vui long khong chon lon hon hom nay',
    }

    const parseValid = (validString) => {
        if (!validString) return {}
        const listString = validString.split('|')
        return listString.reduce((pre, curr) => {
            const [key, value = true] = curr.split(':')
            return { ...pre, [key]: value }
        }, {})
    }

    const validate = (type = 'username', value, listError = {}) => {
        let error = null
        const regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const maxDate = new Date(value).getTime() > new Date().getTime() - 2000
        for (let key in listError) {
            switch (key) {
                case 'required':
                    error = !value ? ERROR_CHECK_LIST_TYPE[key] : null
                    break
                case 'minlength':
                    error =
                        value.length < listError[key]
                            ? ERROR_CHECK_LIST_TYPE[key] +
                              ' ' +
                              listError[key] +
                              ' ky tu'
                            : null
                    break
                case 'maxlength':
                    error =
                        value.length > listError[key]
                            ? ERROR_CHECK_LIST_TYPE[key] +
                              ' ' +
                              listError[key] +
                              ' ky tu'
                            : null
                    break
                case 'hasOneUpperCase':
                    error = !/[A-Z]/.test(value)
                        ? ERROR_CHECK_LIST_TYPE[key]
                        : null
                    break
                case 'isEmail':
                    error = !regExEmail.test(value)
                        ? ERROR_CHECK_LIST_TYPE[key]
                        : null
                    break
                case 'maxDay':
                    error = maxDate ? ERROR_CHECK_LIST_TYPE[key] : null
                    break
            }
            if (error) {
                break
            }
        }
        return error
    }
    const [listError, setlistError] = useState({
        username: null,
        password: null,
        email: null,
        dOB: null,
        sex: null,
    })

    const checkSubmit = () => {
        const buttonEle = document.getElementById('button_register')
        const hasErrors = Object.values(listError).some(
            (error) => error !== null
        )
        console.log(hasErrors)

        if (hasErrors || !username || !password || !email || !sex || !dOB) {
            buttonEle.setAttribute('disabled', 'true')
        } else {
            buttonEle.removeAttribute('disabled')
        }
    }

    const handleChangeInput = (e) => {
        const { name, value, checked } = e
        if (name === 'username') setUsername(value)
        if (name === 'password') setpassword(value)
        if (name === 'email') setemail(value)
        if (name === 'sex') setsex(value)
        if (name === 'dOB') setdOB(new Date(value).getTime())
        const inputValue = value.trim()
        const valid = e.getAttribute('valid')
        const error = validate(name, inputValue, parseValid(valid))
        checkSubmit()
        setlistError({ ...listError, [name]: error })
        console.log(listError.username)
    }
    const handleChangeButton = (e) => {
        console.log(email)
        console.log(username)
        console.log(password)
        console.log(sex)
        console.log(dOB)
        async function postJSON(data) {
            console.log(data)
            try {
                const response = await fetch(
                    'http://3.85.3.86:9001/api/auth/sign-in',
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
                } else {
                    toast.success('Success')
                }
            } catch (error) {
                console.error('Error:', error)
            } finally {
            }
        }

        postJSON({ username, dOB, sex, email, password })
        console.log(username, dOB, sex, email, password)
    }

    return (
        <div>
            <h1>SIGN IN</h1>
            <img src={IMAGE_APP.iconMain} alt="" />
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            >
                <InputCustom
                    onChange={handleChangeInput}
                    label={'Username'}
                    type={'text'}
                    name={'username'}
                    error={listError.username}
                    valid={'required|minlength:6|maxlength:12'}
                    placeholder={'Username'}
                ></InputCustom>
                <InputCustom
                    label={'Password'}
                    type={'text'}
                    error={listError.password}
                    onChange={handleChangeInput}
                    name={'password'}
                    valid={'required|hasOneUpperCase|minlength:8'}
                    placeholder={'Password'}
                ></InputCustom>
                <InputCustom
                    label={'Email'}
                    type={'text'}
                    error={listError.email}
                    onChange={handleChangeInput}
                    name={'email'}
                    valid={'required|isEmail'}
                    placeholder={'your-email@example.com'}
                />
                <RadioCustum
                    name={'sex'}
                    male={'male'}
                    female={'female'}
                    type={'radio'}
                    onChange={handleChangeInput}
                    valueMale={'male'}
                    valueFemale={'feMale'}
                    checked={true}
                />
                <InputCustom
                    label={'Date of Birth'}
                    type={'date'}
                    error={listError.dOB}
                    onChange={handleChangeInput}
                    name={'dOB'}
                    valid={'required|maxDay'}
                />
                <ButtonCustom
                    id={'button_register'}
                    label={'SUBMIT'}
                    type={'submit'}
                    onClick={handleChangeButton}
                />
            </form>
            <ToastContainer />
        </div>
    )
}

export default RegisterPage
