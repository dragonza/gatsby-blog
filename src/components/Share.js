import React from 'react'
import shareStyle from './Share.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

const Share = props => {

  const twitter = `https://twitter.com/intent/tweet?url=${props.url +
  props.pathname}&text=${props.title} by @dragonzal`;

  const fb = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(props.url +
  props.pathname)}`;
  return (
    <div className="post-social">
      <h3 className="center">Share</h3>
      <ul className={shareStyle.social}>
        <li >
          <a href={fb} target="blank" className={shareStyle.facebook}>
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </a>
        </li>
        <li>
          <a href={twitter} target="blank" className={shareStyle.twitter}>
            <FontAwesomeIcon icon={['fab', 'twitter']} />

          </a>
        </li>
      </ul>
    </div>
  )
}

export default Share;
