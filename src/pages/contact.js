import React from 'react'

import Layout from '../components/Layout'
import contactStyle from './contact.module.css';


const Contact = () => (
  <Layout>
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label className={contactStyle.formGroup}>
          Name*:
          <input required type="text" name="name" className={contactStyle.input}/>
        </label>
      </p>
      <p>
        <label required className={contactStyle.formGroup}>
          Email*:
          <input type="email" name="name" />
        </label>
      </p>
      <p>
        <label required className={contactStyle.formGroup}>
          Message*:
          <textarea name="message" rows="4" />
        </label>
      </p>
      <p>
        <button className={contactStyle.buttonSubmit} type="submit">Send</button>
      </p>
    </form>
  </Layout>
)

export default Contact
