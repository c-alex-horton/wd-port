import React from 'react'
import Title, { titleType } from '../../Library/Title'
import styles from './Projects.module.scss'
import ProjectCard from './ProjectCard'
import projects from '../../../data/projects'

const Projects = () => {
  return (
    <div className={styles.project}>
      <Title type={titleType.section}>Projects</Title>
      <div className={styles.projectCaddy}>
        {projects.map((proj) => {
          return <ProjectCard key={proj.name} data={proj} />
        })}
      </div>
    </div>
  )
}

export default Projects
