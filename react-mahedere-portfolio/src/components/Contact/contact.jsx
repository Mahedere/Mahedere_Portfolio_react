import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm('service_712z2kt', 'template_v86euir', form.current,'ENOd4VYwyJCZ_djpE',)
      .then(
        (response) => {
          console.log('Email sent successfully!', response);
          // Reset the form after email is sent successfully
          e.target.reset();
        },
        (error) => {
          console.error('Error sending email:', error);
          // Handle error here if needed
        }
      )
      .catch((error) => {
        console.error('Error sending email:', error);
        // Handle error here if needed
      });
  };
  

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>mahederetebebe98@gmail.com</h5>
            <a href="mailto:mahederetebebe98@gmail.com" target="blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Telegram</h4>
            <h5>@mahederetebebe</h5>
            <a href="https://t.me/mahederetebebe" target="blank">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
