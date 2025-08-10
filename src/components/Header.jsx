import { useState } from 'react'
import styles from './Header.module.css'
import logo from '../MucArch.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    closeMenu()
    
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const headerHeight = 80
      const elementPosition = targetElement.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="MucArch" />
        </div>
        
        <button 
          className={styles.mobileMenuBtn}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul>
            <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
            <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
          </ul>
        </nav>
        
        {isMenuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
      </div>
    </header>
  );
}

export default Header;