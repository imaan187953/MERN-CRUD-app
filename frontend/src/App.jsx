import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './components/User';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<User />}></Route>
      <Route path='/create' element={<CreateUser />}></Route>
      <Route path='/update' element={<UpdateUser />}></Route>
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
