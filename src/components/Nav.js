import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import classnames from 'classnames'

function Nav({ menuLinks, className }) {
    const navClasses = classnames('nav', {
        [className]: !!className,
    })
    return (
        <nav className={navClasses}>
            <ul className="header__nav-container">
                {menuLinks.map((link) => {
                    return (
                        <li key={link.link} className="header__nav-item">
                            <Link
                                to={link.link}
                                // style={{ color: '#fff' }}
                                activeStyle={{
                                    fontWeight: 'bold',
                                    color: 'var(--green)',
                                }}
                            >
                                {link.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

Nav.propTypes = {
    menuLinks: PropTypes.array,
    className: PropTypes.string,
}

export default Nav
