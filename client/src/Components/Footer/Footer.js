import React from 'react'
import './Footer.scss'
import FooterAbout from './FooterAbout/FooterAbout'
import FooterContacts from './FooterContacts/FooterContacts'
import FooterMap from './FooterMap/FooterMap'

export default function Footer(props) {
  return (
    <footer className='Footer'>
      <FooterAbout />
      <FooterContacts />
      <FooterMap />
    </footer>
  )
}