import React from 'react'
import aboutStyles from './about.module.css'
import Layout from '../components/Layout'
import Image from '../components/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => (
  <Layout>
    <div className={aboutStyles.imageContainer}>
      <Image imgName="profile.jpg" />
    </div>

    <h3>Hi there!</h3>
    <p>My name is Ngoc Vuong! I also go with the name Alex!</p>
    <p>
      I am a self-taught front-end developer who is passionate about technology.
      I would love to understand things to their fundamentals and write about
      them occasionally. I love programming, video games and guitar.
    </p>
    <p>
      Welcome to my blog! This is a place where I write about my programming
      , personal experience and anything falls between.
    </p>

    <p>
      I have worked as a developer since 2015. If you are curious
      about my work, you can take a look
      <a href="https://dragonza.github.io" className={aboutStyles.githubLink}>
        {' '}
        here
      </a>
    </p>
    <div>You can find me at</div>
    <div className={aboutStyles.socialMediaContainer}>
      <a href="https://medium.com/@Dragonza" className={aboutStyles.socialMediaItem}>
        <FontAwesomeIcon icon={['fab', 'medium-m']} size="2x" />
      </a>
      <a href="https://github.com/dragonza" className={aboutStyles.socialMediaItem}>
        <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
      </a>
      <a href="https://twitter.com/Dragonzal" className={aboutStyles.socialMediaItem}>
        <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
      </a>

    </div>
  </Layout>
)

export default About
