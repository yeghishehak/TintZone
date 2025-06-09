'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contactus.module.css';
import { usePathname } from 'next/navigation';
import sanitizeHtml from 'sanitize-html';
import validator from 'validator';

export default function ContactUs() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const form = useRef();
  const [serviceType, setServiceType] = useState('');


  const sanitizeInput = (input) =>
    sanitizeHtml(input, {
      allowedTags: [],
      allowedAttributes: {},
    }).trim();

  const sendEmail = (e) => {
    e.preventDefault();


    if (!validator.isEmail(sanitizedData.user_email)) {
      alert('Please enter a valid email address.');
      return;
    }


    const tempForm = form.current;
    for (let input of tempForm.elements) {
      if (input.name && input.value) {
        input.value = sanitizeInput(input.value);
      }
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
          setServiceType(''); // reset select visibility
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error(error);
        }
      );
  };

  return (
    <section className={styles.section}>
      <div className={`${styles.contactAll} ${isHomePage ? styles.noPadding : ''}`}>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <h1 className={styles.bookText}>Book Appointment</h1>

          <input
            className={styles.input}
            type="text"
            name="user_name"
            placeholder="Full Name"
            required
          />
          <input
            className={styles.input}
            type="tel"
            name="user_phone"
            placeholder="Phone Number"
            required
          />
          <input
            className={styles.input}
            type="email"
            name="user_email"
            placeholder="Email Address"
            required
          />

          <select
            name="service_type"
            defaultValue=""
            className={styles.input}
            required
            onChange={(e) => setServiceType(e.target.value)}
          >
            <option value="" disabled>
              Select Service Type
            </option>
            <option value="Vehicle">Vehicle</option>
            <option value="Residential">Residential (Home)</option>
            <option value="Commercial">Commercial/Office</option>
            <option value="Other">Other</option>
          </select>

          <input
            className={styles.input}
            type="text"
            name="vehicle_model"
            placeholder="Vehicle Make & Model"
            required={serviceType === 'Vehicle'}
            style={{ display: serviceType === 'Vehicle' ? 'block' : 'none' }}
          />

          <input
            className={styles.input}
            type="number"
            name="vehicle_year"
            placeholder="Vehicle Year"
            min="1900"
            max={new Date().getFullYear()}
            required={serviceType === 'Vehicle'}
            style={{ display: serviceType === 'Vehicle' ? 'block' : 'none' }}
          />

          <select className={styles.select} name="tint_type" defaultValue="" required>
            <option value="" disabled>
              Select Tint Type
            </option>
            <option value="Carbon">Carbon</option>
            <option value="Ceramic">Ceramic</option>
            <option value="Not Sure">Not Sure</option>
          </select>

          <select className={styles.select} name="tint_areas" defaultValue="" required>
            <option value="" disabled>
              Select Area to Tint
            </option>
            <option value="All Windows">All Windows</option>
            <option value="Front Windows Only">Front Windows Only</option>
            <option value="Rear Windows Only">Rear Windows Only</option>
            <option value="Side Windows Only">Side Windows Only</option>
            <option value="Doors">Doors</option>
            <option value="Skylights">Skylights</option>
            <option value="Glass Walls">Glass Walls</option>
            <option value="Other">Other</option>
          </select>

          <input
            className={styles.input}
            type="date"
            name="appointment_date"
            required
          />
          <input
            className={styles.input}
            type="time"
            name="appointment_time"
            required
          />
          <textarea
            className={styles.textarea}
            name="message"
            placeholder="Additional Notes (optional)"
            rows="4"
          />
          <button className={styles.button} type="submit">
            Book Appointment
          </button>

          <h2 className={styles.h2}>
            Please enter correct data so we can receive it and answer you as soon as possible
          </h2>
        </form>

        <div className={styles.feedback_container}>
          <h1 className={styles.feedback_heading}>Contact Us​</h1>
          <h1 className={styles.feedback_heading2}>Feedback</h1>
          <p className={`${styles.feedback_email} ${styles.feedback_phone}`}>+1 (747) 333-7179</p>
          <p className={styles.feedback_email}>TintZone7@gmail.com</p>
          <h1 className={styles.feedback_heading3}>Address</h1>
          <p className={styles.feedback_address}>Los Angeles, CA</p>
          <h1 className={styles.feedback_heading4}>Working Hours</h1>
          <p className={styles.feedback_worktimes}>Monday - Saturday 10:00-19:00</p>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2740443242!2d-118.69193081831067!3d34.02016130660796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0b4463c2d23%3A0x6db6e0d8824d8a24!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1717604490401!5m2!1sen!2sus"
            className={styles.google_map}
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
