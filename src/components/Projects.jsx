import { useState } from 'react'
import styles from './Projects.module.css'
import ProjectModal from './ProjectModal'

function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'public', name: 'Public' }
  ]
  
  const projects = [
    {
      id: 1,
      title: "Modern Residential Complex",
      category: "residential",
      location: "Istanbul, Turkey",
      year: "2023",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
      description: "Contemporary living spaces with sustainable design principles"
    },
    {
      id: 2,
      title: "Cultural Center",
      category: "cultural",
      location: "Ankara, Turkey",
      year: "2022",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      description: "Innovative public space fostering community interaction"
    },
    {
      id: 3,
      title: "Corporate Headquarters",
      category: "commercial",
      location: "Izmir, Turkey",
      year: "2023",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      description: "Efficient workspace design with natural lighting"
    },
    {
      id: 4,
      title: "City Library",
      category: "public",
      location: "Bursa, Turkey",
      year: "2022",
      image: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=600&h=400&fit=crop",
      description: "Modern learning environment with flexible spaces"
    },
    {
      id: 5,
      title: "Luxury Villa",
      category: "residential",
      location: "Bodrum, Turkey",
      year: "2023",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
      description: "Coastal residence with panoramic sea views"
    },
    {
      id: 6,
      title: "Shopping Center",
      category: "commercial",
      location: "Istanbul, Turkey",
      year: "2021",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      description: "Mixed-use development with retail and office spaces"
    }
  ]
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)
  
  const handleViewProject = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }
  
  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }
  
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Our Projects</h2>
          <p>Showcasing our diverse portfolio of architectural works</p>
        </div>
        
        <div className={styles.categories}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`${styles.categoryBtn} ${activeCategory === category.id ? styles.active : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className={styles.projectGrid}>
          {filteredProjects.map(project => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.imageContainer}>
                <img src={project.image} alt={project.title} />
                <div className={styles.overlay}>
                  <button 
                    className={styles.viewBtn}
                    onClick={() => handleViewProject(project)}
                  >
                    View Project
                  </button>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p className={styles.location}>{project.location} • {project.year}</p>
                <p className={styles.description}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}

export default Projects