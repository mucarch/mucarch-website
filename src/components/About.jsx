import styles from './About.module.css'

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h2>About MucArch</h2>
            <p className={styles.lead}>
              We are a contemporary architecture studio focused on innovative design solutions 
              that enhance the human experience through thoughtful spatial design.
            </p>
            <p>
              Our knowledge-based approach combines cutting-edge design methodologies with 
              sustainable practices to create spaces that are both functional and inspiring. 
              We believe that great architecture should respond to its context while pushing 
              the boundaries of what's possible.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className={styles.stat}>
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
              <div className={styles.stat}>
                <h3>25+</h3>
                <p>Awards Won</p>
              </div>
            </div>
          </div>
          <div className={styles.imageSection}>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop" 
              alt="Modern office space" 
            />
          </div>
        </div>
        
        <div className={styles.values}>
          <h3>Our Values</h3>
          <div className={styles.valueGrid}>
            <div className={styles.value}>
              <h4>Innovation</h4>
              <p>Pushing boundaries with creative solutions</p>
            </div>
            <div className={styles.value}>
              <h4>Sustainability</h4>
              <p>Environmental responsibility in every project</p>
            </div>
            <div className={styles.value}>
              <h4>Quality</h4>
              <p>Excellence in design and execution</p>
            </div>
            <div className={styles.value}>
              <h4>Collaboration</h4>
              <p>Working closely with clients and communities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About