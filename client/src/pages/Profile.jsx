import React from 'react'

import './style.scss'

import About from '../components/About/About'
import Cipher from '../components/Cipher_Map/Cipher'
import Interests from '../components/Interests/Interests'
import Web from '../components/On_the_Web/Web'
import Password from '../components/Password_Security/Password'
import Professional from '../components/Professional_Information/Professional'

const Profile = () => {
  return (
    <div>
      <About/>
      <Cipher/>
      <Interests/>
      <Web/>
      <Password/>
      <Professional/>
    </div>
  )
}

export default Profile