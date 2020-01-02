import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Image from '../components/Image'
import Hamburger from './Hamburger'
import SideMenu from './SideMenu'
import './header.scss'
import Nav from './Nav'

const Header = ({ siteTitle, menuLinks, theme }) => {
  const [isMenuActive, activeMenu] = useState(false)
  console.log('isMenuActive', isMenuActive)
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__brand">
          <div className="header__logo">
            <Image imgName="logo-dragon.png" />
          </div>
          <span className="header__site-title">
            <b>{siteTitle}</b>
          </span>
        </Link>
        <Nav menuLinks={menuLinks}/>
        <div className="icon icon--hamburger">
          <Hamburger
            theme={theme}
            onMenuClick={() => console.log('test') || activeMenu(!isMenuActive)}
          />
        </div>
        <SideMenu
          menuLinks={menuLinks}
          isMenuActive={isMenuActive}
          theme={theme}
          onOverLayClick={() => activeMenu(!isMenuActive)}
        />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
