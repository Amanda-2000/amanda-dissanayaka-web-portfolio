import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import styles from './Contact.module.css';

const GithubIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const ContactInfo = ({ icon, title, value, link }) => {
  return (
    <div className={styles.infoItem}>
      <div className={styles.iconBox}>{icon}</div>
      <div className={styles.itemText}>
        <h4>{title}</h4>
        {link ? (
          <a href={link} target="_blank" rel="noreferrer">
            {value}
          </a>
        ) : (
          <p>{value}</p>
        )}
      </div>
    </div>
  );
};

const Contact = () => {

  return (
    <section className={`${styles.contact} container section-padding`}>
      <motion.div
        className="title-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Get In <span className="highlight">Touch</span></h2>
        <p className="section-subtitle">Let's work together or just say hi!</p>
      </motion.div>

      <div className={styles.container}>
        <motion.div
          className={styles.infoSide}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>Contact Information</h3>
          <p>Feel free to reach out for any collaboration or inquiries.</p>

          <div className={styles.infoList}>
            <ContactInfo
              icon={<Mail size={20} />}
              title="Email"
              value="amandayohani32@gmail.com"
              link="mailto:amandayohani32@gmail.com"
            />
            <ContactInfo
              icon={<LinkedinIcon size={20} />}
              title="LinkedIn"
              value="linkedin.com/in/amanda-dissanayaka"
              link="https://www.linkedin.com/in/amanda-dissanayaka-777311288"
            />
            <ContactInfo
              icon={<GithubIcon size={20} />}
              title="GitHub"
              value="github.com/Amanda-2000"
              link="https://github.com/Amanda-2000"
            />
            <ContactInfo
              icon={<MapPin size={20} />}
              title="Location"
              value="Colombo, Sri Lanka"
            />
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default Contact;
