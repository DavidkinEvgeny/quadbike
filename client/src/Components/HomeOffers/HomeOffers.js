import React from 'react'
import './HomeOffers.scss'
import WrapperContent from './../../UI/WrapperContent/WrapperContent'
import Image1 from './../../Images/Desert.jpg'

export default function HomeOffers(props) {
  return (
    <WrapperContent>
      <div className='HomeOffers'>
        <div className='HomeOffers__offer'>
          <h2>Что мы предлагаем</h2>
          <p>Увлекательное путешествие на уникальных электроквадроциклах по такой близкой и неизвестной Кумысной поляне. Мы подготовили для вас самые насыщенные и интересные маршруты по красивым местам и достопримечательностям нашего леса. А гид-инструктор поможет вам полностью погрузиться в атмосферу, расскажет интересные факты о природе этих мест, истории и легенды.</p>
        </div>
        <div className='HomeOffers__season'>
          <h3>Сезон Весна начат</h3>
          <div className='HomeOffers__images'>
            <img src={Image1} alt='фото' />
          </div>
        </div>
      </div>
    </WrapperContent>
  )
}