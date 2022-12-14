import React, { useState } from 'react'
import styles from './Projects.module.scss'
import Image from 'next/image'
import ProjectModal from './ProjectModal/ProjectModal'

const ProjectCard = ({ data }: { data: any }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <ProjectModal isOpen={isOpen} handle={handleModal} data={data} />
      <div className={styles.projectCard} onClick={handleModal}>
        <Image src={data.image} alt='' draggable={false} />
        <div className={styles.overlay}>
          <h1>{data.name}</h1>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
