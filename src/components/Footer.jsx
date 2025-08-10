import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>MucArch</h3>
            <p>Architecture & Design Studio</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Contact</h4>
            <p>info@mucarch.com</p>
            <p>+90 123 456 7890</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Follow Us</h4>
            <div className={styles.socialLinks}>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">Behance</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 MucArch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;