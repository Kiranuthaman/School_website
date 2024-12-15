
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import Student from './Pages/Student'
import Admin from './Pages/Admin'
import Regis from './Pages/Regis'


function App() {


  return (
    <>
        

    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/registration' element ={<Regis/>} />
      <Route path='/student' element={<Student/>} />
      <Route path='/admin' element={<Admin/>} />
    </Routes>
    </>
  )
}

export default App
