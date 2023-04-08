import React from 'react'

import './style.scss'

const Password = () => {
  return (
    <div className='password__container'>
      <hr />
      <div className="password__top">
        <h2>password & security</h2>
        <button className='primary__btn'>Change</button>
      </div>
      <div className="password__bottom">
        <p>Password</p>
        <input type="password" value={"abcdefghikjl"} disabled/>
      </div>
      <hr />
    </div>
  )
}

export default Password