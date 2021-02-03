import React from 'react'
import './HomeNature.scss'
import WrapperContent from './../../UI/WrapperContent/WrapperContent'
import Image1 from './../../Images/Desert.jpg'

export default function HomeNature(props) {
  return (
    <WrapperContent>
      <div className='HomeNature'>
        <div className='HomeNature__season'>
          <div className='HomeNature__images'>
            <img src={Image1} alt='фото' />
          </div>
        </div>
        <div className='HomeNature__nature'>
          <h2>Удивительное рядом</h2>
          <p>А вы знали что всего в нескольких километрах от Саратова, на Кумысной поляне есть 40 родников, "Древние Чуры", 200 летний Дуб Великан, Ведьмин лес, полянка шаманов, остатки трамвайных путей с царских времён, пробковая роща? Всё это, и многое другое вы откроете, отправляясь с нами в поездку. А наш лесной гид, не просто покажет вам эти места, а раскроет с самых разных сторон.</p>
        </div>
      </div>
    </WrapperContent>
  )
}