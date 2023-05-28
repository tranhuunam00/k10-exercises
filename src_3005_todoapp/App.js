import './index'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Demo from './modules/auth/toast'
import Clock from './modules/auth/Clock'
import LoginPage from './pages/login_register/login'
import RegisterPage from './pages/login_register/register'
import BasePage from './pages/todoApp/tablePage'
import Todoapp from './pages/todoApp/todoapp'

function App() {
    return (
        <div id='app'>
            <Todoapp/>
            {/* <BasePage/> */}
        </div>
    )
}

export default App
