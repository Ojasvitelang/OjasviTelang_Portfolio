import React from 'react';

/**
 * Contact data configuration
 * Contains all contact information with icons
 */
const contactData = [
  {
    id: 1,
    label: 'Email',
    value: 'ojasvitelang22@gmail.com',
    href: 'mailto:ojasvitelang22@gmail.com',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    label: 'Phone',
    value: '+91 9987860961',
    href: 'tel:+919987860961',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    label: 'Location',
    value: 'Kalyan, Mumbai',
    href: null,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

/**
 * ContactItem Component
 * Individual contact entry with icon and info
 */
function ContactItem({ contact }) {
  const content = (
    <>
      <div className="contact-icon">{contact.icon}</div>
      <div className="contact-info">
        <h4>{contact.label}</h4>
        {contact.href ? (
          <a href={contact.href}>{contact.value}</a>
        ) : (
          <p>{contact.value}</p>
        )}
      </div>
    </>
  );

  return <div className="contact-item">{content}</div>;
}

/**
 * Contact Component
 * Displays contact information section
 */
function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-intro">
            I'm always open to discussing new projects, opportunities, or
            collaborations. Feel free to reach out through any of the channels
            below.
          </p>
          <div className="contact-list">
            {contactData.map((contact) => (
              <ContactItem key={contact.id} contact={contact} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
