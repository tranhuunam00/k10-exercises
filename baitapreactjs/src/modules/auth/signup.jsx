import { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import IMAGE_APP from '../../assets/Image'
import Styles from './Style.module.scss'
import InputCustom from '../../components/inputs/inputCustom'
import InputPlanet from '../../components/inputPlanet/inpuPlanet'
const Signup = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [planet, setPlanet] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [date, setDate] = useState('')

    const handleChangeInput = (e) => {
        const { name, value } = e
        if (name === 'username') setUsername(value)
        if (name === 'email') setEmail(value)
        if (name === 'date') setDate(value)
        if (name === 'password') setPassword(value)
        if (name === 'rePassword') setRePassword(value)
    }
    const handleGenderChange = (event) => {
        setPlanet(event.target.value)
    }
    const SignupSchema = Yup.object().shape({
        email: Yup.string()
            .email('email sai dinh dang')
            .required('email khong duoc de trong'),
        username: Yup.string()
            .min(8, 'email phai hon 8 ky tu')
            .max(16, 'email khong duoc qua 16 ky tu ')
            .required('Ban khong duoc de trong'),
        password: Yup.string()
            .min(8, 'password phai hon 8 ky tu')
            .max(16, 'password khong duoc qua 16 ky tu ')
            .required('Ban khong duoc de trong'),
    })
    return (
        <div className={Styles.container}>
            <div className={Styles.container__left}>
                <img
                    className={Styles.container__left__img}
                    src={IMAGE_APP.icon}
                    alt="fale"
                />
                <div className={Styles.container__left__from}>
                    <p className={Styles.container__left__from__p}>Sign up</p>
                    <p className={Styles.container__left__from__p1}>
                        If you already have an account register
                    </p>
                    <p className={Styles.container__left__from__p2}>
                        You can{' '}
                        <span>
                            <a href="">Login here !</a>
                        </span>
                    </p>
                    <Formik
                        initialValues={{
                            email: '',
                            username: '',
                            email: '',
                            password: '',
                        }}
                        validationSchema={SignupSchema}
                    >
                        {({ value, errors, handleSubmit }) => {}}

                        <InputCustom
                            onChange={handleChangeInput}
                            img={IMAGE_APP.iconEmail}
                            label={'Email:'}
                            type={'text'}
                            name={'email'}
                            error=""
                        ></InputCustom>
                        <InputCustom
                            onChange={handleChangeInput}
                            img={IMAGE_APP.iconUsername}
                            label={'Username:'}
                            type={'text'}
                            name={'username'}
                            error=""
                        ></InputCustom>
                        <label htmlFor="">Planet</label>
                        <div className={Styles.from__planet}>
                            <InputPlanet
                                onChange={handleGenderChange}
                                type={'radio'}
                                name={'sex'}
                                label={'male'}
                                //checked={planet === 'male'}
                            ></InputPlanet>
                            <InputPlanet
                                onChange={handleGenderChange}
                                type={'radio'}
                                name={'sex'}
                                label={'fe_male'}
                                //checked={planet === 'fe_male'}
                            ></InputPlanet>
                        </div>
                        <InputCustom
                            onChange={handleChangeInput}
                            img={IMAGE_APP.iconPassword}
                            label={'Password:'}
                            type={'password'}
                            name={'password'}
                            error=""
                        ></InputCustom>
                        <InputCustom
                            onChange={handleChangeInput}
                            img={IMAGE_APP.iconPassword}
                            label={'Confrim Password:'}
                            type={'password'}
                            name={'rePassword'}
                            error=""
                        ></InputCustom>
                        <InputCustom
                            onChange={handleChangeInput}
                            label={'Date of birth:'}
                            type={'date'}
                            name={'date'}
                            error=""
                        ></InputCustom>
                    </Formik>
                    <input
                        className={Styles.submit}
                        type="submit"
                        value="Register"
                        onClick={() => {
                            console.log(username)
                            console.log(email)
                            console.log(password)
                            console.log(rePassword)
                            console.log(date)
                            console.log(planet)
                        }}
                    />
                </div>
            </div>
            <div className={Styles.container__right}>
                <div className={Styles.container__right__icon}>
                    <img src={IMAGE_APP.iconPhone} alt="fale" />
                    <p className={Styles.container__right__icon_p}>
                        +84357935220
                    </p>
                </div>
                <img
                    className={Styles.container__right__img}
                    src={IMAGE_APP.image}
                    alt="fale"
                />
                <p className={Styles.container__right__p}>Sign Up to name</p>
                <p className={Styles.container__right__p1}>
                    Lorem Ipsum is simply
                </p>
            </div>
        </div>
    )
}

export default Signup
