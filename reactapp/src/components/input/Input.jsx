import React from 'react'
import "./input.css"

function Input({type,placeHolder,onChange}) {
  return <input type={type} className='input' placeholder={placeHolder} onChange={onChange}/>
}

export default Input
