import React, { Component } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import Nav from './Nav'

class SideMenu extends Component {
    render() {
        const { isMenuActive, onOverLayClick, menuLinks = [] } = this.props
        const sideMenuClasses = classnames('side-menu', {
            'side-menu--active': isMenuActive,
        })
        const sideMenuContentClasses = classnames('side-menu__content', {
            'side-menu__content--active': isMenuActive,
        })
        return (
            <aside className={sideMenuClasses}>
                <div className="side-menu__overlay" onClick={onOverLayClick} />
                <Nav menuLinks={menuLinks} className={sideMenuContentClasses} />
            </aside>
        )
    }
}

SideMenu.propTypes = {
    isMenuActive: PropTypes.bool,
    onOverLayClick: PropTypes.func,
    menuLinks: PropTypes.array,
}

export default SideMenu
