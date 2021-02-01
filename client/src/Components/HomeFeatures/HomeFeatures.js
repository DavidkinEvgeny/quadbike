import React from 'react'
import './HomeFeatures.scss'
import { IoHardwareChipOutline } from 'react-icons/io5'
import { FaMoneyBillWave } from 'react-icons/fa'
import { RiCameraLensLine } from 'react-icons/ri'
import { GiThreeLeaves } from 'react-icons/gi'

export default function HomeFeatures(props) {
  return (
    <div className='HomeFeatures'>
      <h2>Наши особенности</h2>
      <div className='HomeFeatures__context'>
        <p><IoHardwareChipOutline/>Уникально </p>
        <p><RiCameraLensLine/>ЯРКО </p>
        <p><FaMoneyBillWave/>ДОСТУПНО </p>
        <p><GiThreeLeaves/>ЭКОЛОГИЧНО </p>
      </div>
    </div>
  )
}