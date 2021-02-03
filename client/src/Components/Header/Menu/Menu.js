import React from 'react'
import './Menu.scss'
import { Link } from 'react-router-dom'


export default function Menu(props) {
  return (
    <div className='Menu'>
      <ul>
        <li><Link to='/'>Главная</Link></li>
        <li><Link to='/price'>Маршруты и цены</Link></li>
        <li><Link to='/regulations'>Правила</Link></li>
        <li><Link to='/contacts'>Контакты</Link></li>
        <li><Link to='/present'>В подарок</Link></li>
        <li><Link to='/photos'>Фото</Link></li>
      </ul>
    </div>
  )
}