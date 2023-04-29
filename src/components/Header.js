import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Hamburger from './Hamburger'
import SideMenu from './SideMenu'
import './header.scss'
import Nav from './Nav'
import { StaticImage } from 'gatsby-plugin-image'

const Header = ({ siteTitle, menuLinks, mode }) => {
    const [isMenuActive, activeMenu] = useState(false)
    return (
        <header className="header">
            <div className="header__content">
                <Link to="/" className="header__brand">
                    <div className="header__logo">
                        <StaticImage
                            src="../images/logo-dragon.png"
                            alt="logo"
                        />
                    </div>
                    <span className="header__site-title">
                        <b>{siteTitle}</b>
                    </span>
                </Link>
                <Nav menuLinks={menuLinks} />
                <div className="icon icon--hamburger">
                    <Hamburger
                        mode={mode}
                        onMenuClick={() => activeMenu(!isMenuActive)}
                    />
                </div>
                <SideMenu
                    menuLinks={menuLinks}
                    isMenuActive={isMenuActive}
                    // mode={mode}
                    onOverLayClick={() => activeMenu(!isMenuActive)}
                />
            </div>
        </header>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
    mode: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: '',
}

export default Header
