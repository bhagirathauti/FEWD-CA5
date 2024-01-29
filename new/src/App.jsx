import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from './Pages/Home'
import Form from "./Components/Form"
import NewHome from './Pages/NewHome'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='NewHome' element={<NewHome/>}/>
    </Routes>
  )
}

export default App