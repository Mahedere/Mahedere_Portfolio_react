import React from 'react'
import './contact.css'
import{MdOutlineEmail} from 'react-icons/md'
const contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>mahederetebebe98@gmail.com</h5>
            <a href="mailto:mahederetebebe98@gmail.com"target='blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <MdOutlineEmail/>
            <h4>Telegram</h4>
            <h5>@mahederetebebe</h5>
            <a href="https://t.me/mahederetebebe" target='blank'>Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name'required />
          <input type="email" name='email' placeholder='Your Email'required />
          <textarea name="message" rows="7" placeholder='Your Message'required></textarea>
          <button type='submit'className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact