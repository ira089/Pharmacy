import React from 'react'
import Logo from './Logo/Logo'
import NavLinks from './NavLinks/NavLinks'
import AuthLinks from './AuthLinks/AuthLinks'

const Header = () => {
  return (
    <header>
      <Logo/>
      <NavLinks/>
      <AuthLinks/>
    </header>
  )
}

export default Header