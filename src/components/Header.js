import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Image from '../components/Image'
import headerStyle from './Header.module.css'

const Header = ({ siteTitle, menuLinks }) => (
  <header className={headerStyle.header}>
    <div className={headerStyle.contentContainer}>
      <div className={headerStyle.logoAndNavContainer}>
        <Link to="/" className={headerStyle.siteNameContainer}>
          <div className={headerStyle.logoContainer}>
            <Image imgName="logo-dragon.png" />
          </div>
          <span className={headerStyle.siteNameTitle}>
          <b>{siteTitle}</b>
        </span>
        </Link>
        <nav>
          <ul className={headerStyle.navContainer}>
            {menuLinks.map(link => {
              return (
                <li key={link.link} className={headerStyle.navItem}>
                  <Link
                    to={link.link}
                    // style={{ color: '#fff' }}
                    activeStyle={{ fontWeight: 'bold', color: 'var(--green)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
