import { useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    // EmailJS configuration (you'll need to set these up)
    const serviceId = 'service_0r1r3r4' // Replace with your EmailJS service ID
    const templateId = 'template_ppyzqpe' // Replace with your EmailJS template ID
    const publicKey = 'O6dH14S1pAUUszIkf' // Replace with your EmailJS public key
    
    try { 
      // For now, we'll simulate email sending with setTimeout
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Uncomment this when you have EmailJS configured:
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          to_email: 'Muhammedcagri@mucarch.com'
        },
        publicKey
      )
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })
      
    } catch (error) {
      console.error('Email send failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Let's Work Together</h2>
          <p>Ready to collaborate on your next project? Get in touch with us.</p>
        </div>
        
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <h3>Get in Touch</h3>
              <div className={styles.infoItem}>
                <h4>Email</h4>
                <p>info@mucarch.com</p>
              </div>
              <div className={styles.infoItem}>
                <h4>Phone</h4>
                <p>+90 123 456 7890</p>
              </div>
              <div className={styles.infoItem}>
                <h4>Address</h4>
                <p>Ankara, Turkey</p>
              </div>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink}>Instagram</a>
                <a href="#" className={styles.socialLink}>LinkedIn</a>
                <a href="#" className={styles.socialLink}>Behance</a>
              </div>
            </div>
            
            <div className={styles.recruitmentCard}>
              <h3>Join Our Team</h3>
              <p>We're always looking for talented architects and designers to join our growing team.</p>
              <button className={styles.careersBtn}>View Career Opportunities</button>
            </div>
          </div>
          
          <div className={styles.formSection}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="company">Company/Organization</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className={styles.successMessage}>
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className={styles.errorMessage}>
                  ✗ Failed to send message. Please try again or contact us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact