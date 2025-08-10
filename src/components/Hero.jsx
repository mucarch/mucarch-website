import { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import ProjectModal from './ProjectModal';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const projects = [
    {
      id: 1,
      title: "Modern Residential Complex",
      description: "Contemporary living spaces with sustainable design",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Cultural Center",
      description: "Innovative public space fostering community interaction",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Office Building",
      description: "Efficient workspace design with natural lighting",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [projects.length]);

  const handleViewProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroSlider}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className={styles.slideContent}>
              <div className={styles.container}>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <button 
                  className={styles.ctaButton}
                  onClick={() => handleViewProject(project)}
                >
                  View Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.heroNav}>
        {projects.map((_, index) => (
          <button
            key={index}
            className={`${styles.navDot} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      
      <div className={styles.heroIntro}>
        <div className={styles.container}>
          <h2>Architecture & Design Studio</h2>
          <p>Creating spaces with a knowledge-based approach</p>
        </div>
      </div>
      
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}

export default Hero;