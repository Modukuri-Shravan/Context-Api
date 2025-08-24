import React from 'react'
import { UserProvider } from './Context/UserContext'
import Navbar from './Components/Navbar'
import LoginButton from './Components/LoginButton'


const App = () => {
  return (
    <UserProvider>
      <Navbar/>
      <div style={{ margin: "20px" }}><LoginButton/></div>
    </UserProvider>
  )
}

export default App