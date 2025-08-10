import { useEffect } from 'react'
import styles from './ProjectModal.module.css'

function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleContactClick = () => {
    onClose()
    
    setTimeout(() => {
      const contactElement = document.getElementById('contact')
      if (contactElement) {
        const headerHeight = 80
        const elementPosition = contactElement.offsetTop - headerHeight
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    }, 300)
  }

  if (!isOpen || !project) return null

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>
        
        <div className={styles.modalHeader}>
          <img src={project.image} alt={project.title} />
          <div className={styles.projectDetails}>
            <h2>{project.title}</h2>
            <p className={styles.location}>{project.location} • {project.year}</p>
            <p className={styles.category}>{project.category}</p>
          </div>
        </div>
        
        <div className={styles.modalBody}>
          <div className={styles.description}>
            <h3>Project Overview</h3>
            <p>{project.description}</p>
            <p>
              This {project.category} project represents our commitment to innovative design 
              and sustainable architecture. The project incorporates modern design principles 
              while respecting the local context and environment.
            </p>
          </div>
          
          <div className={styles.projectInfo}>
            <div className={styles.infoItem}>
              <h4>Location</h4>
              <p>{project.location}</p>
            </div>
            <div className={styles.infoItem}>
              <h4>Year</h4>
              <p>{project.year}</p>
            </div>
            <div className={styles.infoItem}>
              <h4>Category</h4>
              <p>{project.category}</p>
            </div>
            <div className={styles.infoItem}>
              <h4>Status</h4>
              <p>Completed</p>
            </div>
          </div>
        </div>
        
        <div className={styles.modalFooter}>
          <button 
            className={styles.contactBtn}
            onClick={handleContactClick}
          >
            Contact for Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal