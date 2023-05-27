import './index'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Demo from './modules/auth/Demo'
import Clock from './modules/auth/Clock'
import LoginPage from './modules/auth/login'
import RegisterPage from './modules/auth/register'
import BasePage from './modules/auth/base'

function App() {
    return (
        <div id='app'>
            {/* <LoginPage /> */}
            {/* <RegisterPage/> */}
            <BasePage/>
        </div>
    )
}

export default App
