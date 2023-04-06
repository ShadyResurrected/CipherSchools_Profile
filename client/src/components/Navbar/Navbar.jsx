import React from 'react'

import logo from '../../assets/logo.png'
import {AiOutlineCompass,AiOutlineSearch} from 'react-icons/ai'
import {BsFilterRight} from 'react-icons/bs'
import {IoMdNotificationsOutline} from 'react-icons/io'

import './style.scss'
import { Switch } from '@mui/material'

const Navbar = () => {
  return (
    <section>
        <div className="top__left">
            <img src={logo} alt="Logo" />
            <span>CipherSchools</span>
        </div>
        <div className="top__middle">
            <div className="browse__section">
                <AiOutlineCompass/>
                <span>Browse</span>
            </div>
            <div className="search__input__container">
                <AiOutlineSearch/>
                <input type="text" placeholder='Search and Learn'/>
                <BsFilterRight/>
            </div>
        </div>
        <div className="top__right">
            <IoMdNotificationsOutline/>
            <div className="profile_pic"></div>
            <span>Cipher Point</span>
            <Switch  />
        </div>
    </section>
  )
}

export default Navbar