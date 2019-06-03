import React from 'react'
import aboutStyles from './about.module.css'
import Layout from '../components/Layout'
import Image from '../components/Image'

const About = () => (
  <Layout>
    <div className={aboutStyles.imageContainer}>
      <Image imgName="profile.jpg" />
    </div>


    <h3>Hi there!</h3>
    <p>My name is Ngoc Vuong!</p>
    <p>
      I am a self-taught front-end developer who is passionate about technology. I would love to understand
      things
      to their fundamentals and write about them occasionally. I love programming, video games and guitar.
    </p>

    <p>I have worked as a developer for more than 4 years. If you are curious about my work. You can take a look
      <a href="https://dragonza.github.io" className={aboutStyles.githubLink}> here</a>
    </p>
  </Layout>
)

export default About
