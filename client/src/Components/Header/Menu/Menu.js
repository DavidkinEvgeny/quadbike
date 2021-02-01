import React from 'react'
import './Menu.scss'

export default function Menu(props) {
  return (
      <div className='Menu'>
        <ul>
          <li><a href='/'>Главная</a></li>
          <li><a href='/'>Маршруты и цены</a></li>
          <li><a href='/'>Правила</a></li>
          <li><a href='/'>Контакты</a></li>
          <li><a href='/'>В подарок</a></li>
          <li><a href='/'>Фото</a></li>
          <li><a href='/'>Помощь природе</a></li>
        </ul>
      </div>
  )
}