import React from 'react'
import './HomeReviews.scss'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import WrapperContent from '../../UI/WrapperContent/WrapperContent'
import image from './../../Images/chel.jpg'


export default class HomeReviews extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      AdaptiveHeight: false,
      rtl: true
    }
    return (
    <WrapperContent>
      <div className='HomeReviews'>
        <h2>Отзывы</h2>
        <Slider {...settings}>
          <div className='HomeReviews__items'>
            <p>Огромное спасибо за интересную и познавательную экскурсию на квадроциклах 28 октября! Тот самый случай, когда ищешь одно, а находишь намного больше и интереснее. Всего самого доброго организаторам! Вернемся к вам еще!</p>
            <div className='HomeReviews__content'>
              <img src={image} alt='изображение' />
              <h4>ТАТЬЯНА ПОЛУНИНА</h4>
            </div>
          </div>
          <div className='HomeReviews__items'>
            <p>Огромное спасибо за интересную и познавательную экскурсию на квадроциклах 28 октября! Тот самый случай, когда ищешь одно, а находишь намного больше и интереснее. Всего самого доброго организаторам! Вернемся к вам еще!</p>
            <div className='HomeReviews__content'>
              <img src={image} alt='изображение' />
              <h4>ТАТЬЯНА ПОЛУНИНА</h4>
            </div>
          </div>
          <div className='HomeReviews__items'>
            <p>Огромное спасибо за интересную и познавательную экскурсию на квадроциклах 28 октября! Тот самый случай, когда ищешь одно, а находишь намного больше и интереснее. Всего самого доброго организаторам! Вернемся к вам еще!</p>
            <div className='HomeReviews__content'>
              <img src={image} alt='изображение' />
              <h4>ТАТЬЯНА ПОЛУНИНА</h4>
            </div>
          </div>
          <div className='HomeReviews__items'>
            <p>Огромное спасибо за интересную и познавательную экскурсию на квадроциклах 28 октября! Тот самый случай, когда ищешь одно, а находишь намного больше и интереснее. Всего самого доброго организаторам! Вернемся к вам еще!</p>
            <div className='HomeReviews__content'>
              <img src={image} alt='изображение' />
              <h4>ТАТЬЯНА ПОЛУНИНА</h4>
            </div>
          </div>
          <div className='HomeReviews__items'>
            <p>Огромное спасибо за интересную и познавательную экскурсию на квадроциклах 28 октября! Тот самый случай, когда ищешь одно, а находишь намного больше и интереснее. Всего самого доброго организаторам! Вернемся к вам еще!</p>
            <div className='HomeReviews__content'>
              <img src={image} alt='изображение' />
              <h4>ТАТЬЯНА ПОЛУНИНА</h4>
            </div>
          </div>
        </Slider>
      </div>
    </WrapperContent>

    )
  }
}