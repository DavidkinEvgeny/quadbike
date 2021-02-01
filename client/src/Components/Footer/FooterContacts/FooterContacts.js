import React from 'react'
import './FooterContacts.scss'

export default function FooterContacts(props) {
  return (
    <div className='FooterContacts'>
      <h3>О нас</h3>
      <p>8 (8452) 46-00-36 <span>Запись по телефону</span></p>
      <p>Саратов, Лесная 9 <span>Лесная та что в 400м от лагеря Берёзка. (Лесных в Саратове несколько)</span></p>
      <p><a href='/'>Вконтакте</a></p>
    </div>
  )
}