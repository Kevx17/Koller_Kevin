import styles from './ProjectsStyles.module.css';
import ProjectCard from '../common/ProjectCard';
import img from '../../assets/images.png'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard
              src={img}
              link='google.com'
              h3='Project1'
              p='short description'
            />
            <ProjectCard
              src={img}
              link='google.com'
              h3='Project2'
              p='short description'
            />
            <ProjectCard
              src={img}
              link='google.com'
              h3='Project3'
              p='short description'
            />
        </div>
    </section>
  )
}

export default Projects
