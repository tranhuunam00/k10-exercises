import './App.css'
import React,{useState} from 'react'
import Login from './Screens/Login'
import Register from './Screens/register'
import TimeNow from './module'
import { Route, Routes } from 'react-router-dom'
import GetDataJson from './Screens/GetDataJson'

function App() {
    
    return (
        <div className="">
            
            {/* <Register /> */}
            {/* <Routes>
                <Route path='/' element={<Register/>}/>
                <Route path='/Login' element={<Login/>}/>
            </Routes> */}
            <Login/>
            {/* <Register/> */}
            {/* <GetDataJson/> */}
        </div>
    )
}

export default App
