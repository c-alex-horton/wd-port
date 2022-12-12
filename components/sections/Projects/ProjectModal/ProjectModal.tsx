import React from 'react'
import styles from './ProjectModal.module.scss'
import Title, { titleType } from '../../../Library/Title'
import Image from 'next/image'
import Badge from '../../../Library/Badge'
import { BsGithub } from 'react-icons/bs'
import { BiLinkExternal } from 'react-icons/bi'
import { RiCloseCircleFill } from 'react-icons/ri'

const ProjectModal = ({
  isOpen,
  handle,
  data,
}: {
  isOpen: boolean
  handle: () => void
  data: any
}) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalBackground} onClick={handle}></div>
      <div className={styles.modalContent}>
        <div className={styles.close}>
          <RiCloseCircleFill onClick={handle} />
        </div>
        <Title type={titleType.section}>{data.name}</Title>
        <div className={styles.links}>
          {data.link && (
            <a href={data.link} target='_blank' rel='noreferrer'>
              <BiLinkExternal />
            </a>
          )}
          {data.github && (
            <a href={data.github} target='_blank' rel='noreferrer'>
              <BsGithub />
            </a>
          )}
        </div>
        <a
          href={data.link ? data.link : data.github}
          target='_blank'
          rel='noreferrer'>
          <Image src={data.image} alt='' />
        </a>
        <div className={styles.skillCaddyFlex}>
          {data.skills.map((skill: string) => {
            return <Badge key={skill}>{skill}</Badge>
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
