import React, { useState } from 'react'
import nextIcon from '../../../public/skill-icons/next-icon.svg'
import tsIcon from '../../../public/skill-icons/typescript-icon.svg'
import reactIcon from '../../../public/skill-icons/react-icon.svg'
import postgresIcon from '../../../public/skill-icons/postgres-icon.svg'
import nodeIcon from '../../../public/skill-icons/node-icon.svg'
import expressIcon from '../../../public/skill-icons/express-icon.svg'
import strapiIcon from '../../../public/skill-icons/strapi-icon.svg'
import SkillIcon from './SkillIcon'
import styles from './Skill.module.scss'
import Title, { titleType } from '../../Library/Title'
import skills from '../../../data/skills'
import Badge from '../../Library/Badge'

const SkillCaddy = () => {
  const [showAll, setShowAll] = useState(false)

  const icons = [
    { name: 'Next.JS', icon: nextIcon },
    { name: 'TypeScript', icon: tsIcon },
    { name: 'React', icon: reactIcon },
    { name: 'PostgreSQL', icon: postgresIcon },
    { name: 'Node.JS', icon: nodeIcon },
    { name: 'Express.JS', icon: expressIcon },
    { name: 'strapi', icon: strapiIcon },
  ]

  const handleShow = () => setShowAll(!showAll)

  if (showAll) {
    return (
      <div className={styles.skillsSection}>
        <Title type={titleType.feature}>Featured Skills</Title>
        <div
          className={styles.skillCaddyFlex}
          style={{ justifyContent: 'flex-start' }}>
          {skills.map((skill) => {
            return <Badge key={skill}>{skill}</Badge>
          })}
        </div>
        <button onClick={() => handleShow()}>Show Less</button>
      </div>
    )
  }

  return (
    <div className={styles.skillsSection}>
      <Title type={titleType.feature}>Featured Skills</Title>
      <div className={styles.skillCaddyGrid}>
        {icons.map((icon) => {
          return <SkillIcon key={icon.name} icon={icon.icon} name={icon.name} />
        })}
      </div>
      <button onClick={() => handleShow()}>Show All</button>
    </div>
  )
}

export default SkillCaddy
