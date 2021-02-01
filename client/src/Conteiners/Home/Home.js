import React from 'react'
import HomeFeatures from '../../Components/HomeFeatures/HomeFeatures'
import HomeHeader from '../../Components/HomeHeader/HomeHeader'
import HomeOffers from '../../Components/HomeOffers/HomeOffers'

export default class Home extends React.Component {
  render() {
    return (
      <div className='Home'>
        <HomeHeader />
        <HomeOffers />
        <HomeFeatures />
      </div>
    )
  }
}