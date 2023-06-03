import './index'
import Demo from './modules/auth/toast'
import Clock from './modules/auth/Clock'
import LoginPage from './pages/login_register/login'
import RegisterPage from './pages/login_register/register'
import LearnuseReducer from './pages/todoApp/learnuseReducer'
import Todoapp from './pages/todoApp/todoapp'
import { useStore } from './context'
import Model_Edit from './pages/todoApp/model_todoUser/model_edit'

function App() {
    const [{ isOpenModal }, dispatch] = useStore()
    return (
        <div>
            {/* <Model_Edit/> */}
            <Todoapp />
            {isOpenModal && <Model_Edit/>}
        </div>
    )
}

export default App