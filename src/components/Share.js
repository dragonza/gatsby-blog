import React from 'react'
import * as shareStyle from './Share.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const Share = (props) => {
    const twitter = `https://twitter.com/intent/tweet?url=${
        props.url + props.pathname
    }&text=${props.title} by @dragonzal`

    const fb = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        props.url + props.pathname
    )}`
    return (
        <div className="post-social">
            <h3 className="center">Share</h3>
            <ul className={shareStyle.social}>
                <li>
                    <a
                        href={fb}
                        target="blank"
                        className={shareStyle.facebook}
                        aria-label="share on facebook"
                    >
                        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                    </a>
                </li>
                <li>
                    <a
                        href={twitter}
                        target="blank"
                        className={shareStyle.twitter}
                        aria-label="share on twitter"
                    >
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </a>
                </li>
            </ul>
        </div>
    )
}
Share.propTypes = {
    pathname: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Share
