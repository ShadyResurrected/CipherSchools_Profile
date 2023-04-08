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
    <main>
      <About/>
      <Cipher/>
      <Web/>
      <Professional/>
      <Password/>
      <Interests/>
    </main>
  )
}

export default Profile