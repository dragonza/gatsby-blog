import React from "react"

import Layout from "../components/Layout"

const Contact = () => (
  <Layout>
    <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="bot-field" />

      <input type="hidden" name="form-name" value="contact" />

      <p>
        <label>Email: <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type='submit'>Send</button>
    </p>
  </form>
  </Layout>
)

export default Contact
