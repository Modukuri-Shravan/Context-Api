import React from 'react'
import { UserProvider } from './Context/UserContext'
import Navbar from './Components/Navbar'
import LoginButton from './Components/LoginButton'
import AuthStatus from './Components/AuthStatus'
import UserProfile from './Components/UserProfile'
import LogoutButton from './Components/LogoutButton'

const App = () => {
  return (
    <UserProvider>
      <Navbar/>
      <div style={{ margin: "20px" }}><LoginButton/></div>
      <div style={{ margin: "20px" }}><AuthStatus/></div>
      <div style={{ margin: "20px" }}><UserProfile/></div>
      <div style={{ margin: "20px" }}><LogoutButton/></div>
    </UserProvider>
  )
}

export default App