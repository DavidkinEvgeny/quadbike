import React from 'react'
import './WrapperApp.scss'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function WrapperApp(props) {
  return (
    <div className='WrapperApp'>
      <Header />
      <main>
        { props.children }
      </main>
      <Footer />
    </div>
  )
}