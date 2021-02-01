import React from 'react'
import './WrapperContent.scss'

export default function WrapperContent(props) {
  return (
    <div className='WrapperContent'>
      { props.children }
    </div>
  )
}