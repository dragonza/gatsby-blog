import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

const Link = ({ children, to, ...other }) => {
    const internal = /^\/(?!\/)/.test(to)

    if (internal) {
        return (
            <GatsbyLink to={to} {...other}>
                {children}
            </GatsbyLink>
        )
    }

    return (
        <a href={to} {...other}>
            {children}
        </a>
    )
}
Link.propTypes = {
    children: PropTypes.element.isRequired,
    to: PropTypes.string.isRequired,
}
export default Link
