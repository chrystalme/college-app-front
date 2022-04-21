import React from 'react'
import { BrowserRouter as Router ,Routes, Route, Outlet } from 'react-router-dom'
import App from '../App'
import Header from './Header'
import Login from './Login'

interface Props {}

function Routers(props: Props) {
  const {} = props

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default Routers
