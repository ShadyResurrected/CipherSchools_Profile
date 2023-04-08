import React from 'react'

import './style.scss'

const Interests = () => {
  return (
    <div className='interests__container'>
      <div className="interests__top">
        <h2>interests</h2>
        <button className='primary__btn'>Edit</button>
      </div>
      <div className="interests__bottom">
        <div className="interest__tab">Data</div>
        <div className="interest__tab">Data Mining</div>
      </div>
    </div>
  )
}

export default Interests