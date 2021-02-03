import React from 'react'
import HomeFeatures from '../../Components/HomeFeatures/HomeFeatures'
import HomeHeader from '../../Components/HomeHeader/HomeHeader'
import HomeMoments from '../../Components/HomeMoments/HomeMoments'
import HomeNature from '../../Components/HomeNature/HomeNature'
import HomeOffers from '../../Components/HomeOffers/HomeOffers'
import HomeReviews from '../../Components/HomeReviews/HomeReviews'
import HomeRoutes from '../../Components/HomeRoutes/HomeRoutes'

export default class Home extends React.Component {
  render() {
    return (
      <div className='Home'>
        <HomeHeader />
        <HomeOffers />
        <HomeFeatures />
        <HomeNature />
        <HomeRoutes />
        <HomeMoments />
        <HomeReviews />
      </div>
    )
  }
}