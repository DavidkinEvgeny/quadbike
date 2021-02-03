import React from 'react'
import './HomeRoutes.scss'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import WrapperContent from '../../UI/WrapperContent/WrapperContent'
import image from './../../Images/Desert.jpg'


export default class HomeRoutes extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      AdaptiveHeight: false,
    }
    return (
    <WrapperContent>
      <div className='HomeRoutes'>
        <h2>Маршруты и цены</h2>
        <Slider {...settings}>
          <div className='HomeRoutes__items'>
            <a href='/'>
              <div className='HomeRoutes__content'>
                <h3>Сердце леса</h3>
                <p>маршрут на 2 часа</p>
              </div>
              <img src={image} alt='изображение' />
            </a>
          </div>
          <div className='HomeRoutes__items'>
            <a href='/'>
              <div className='HomeRoutes__content'>
                <h3>Сердце леса</h3>
                <p>маршрут на 2 часа</p>
              </div>
              <img src={image} alt='изображение' />
            </a>
          </div>
          <div className='HomeRoutes__items'>
            <a href='/'>
              <div className='HomeRoutes__content'>
                <h3>Сердце леса</h3>
                <p>маршрут на 2 часа</p>
              </div>
              <img src={image} alt='изображение' />
            </a>
          </div>
          <div className='HomeRoutes__items'>
            <a href='/'>
              <div className='HomeRoutes__content'>
                <h3>Сердце леса</h3>
                <p>маршрут на 2 часа</p>
              </div>
              <img src={image} alt='изображение' />
            </a>
          </div>
          <div className='HomeRoutes__items'>
            <a href='/'>
              <div className='HomeRoutes__content'>
                <h3>Сердце леса</h3>
                <p>маршрут на 2 часа</p>
              </div>
              <img src={image} alt='изображение' />
            </a>
          </div>
        </Slider>
        <button>Правила</button>
      </div>
    </WrapperContent>

    )
  }
}