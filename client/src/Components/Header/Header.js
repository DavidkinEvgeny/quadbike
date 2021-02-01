import React from 'react'
import './Header.scss'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'

export default function Header(props) {
  return (
    <header className='Header'>
      <Logo />
      <Menu />
    </header>
  )
}