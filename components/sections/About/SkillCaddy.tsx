import React from 'react'
import nextIcon from '../../../public/skill-icons/next-icon.svg'
import tsIcon from '../../../public/skill-icons/typescript-icon.svg'
import reactIcon from '../../../public/skill-icons/react-icon.svg'
import postgresIcon from '../../../public/skill-icons/postgres-icon.svg'
import nodeIcon from '../../../public/skill-icons/node-icon.svg'
import expressIcon from '../../../public/skill-icons/express-icon.svg'
import strapiIcon from '../../../public/skill-icons/strapi-icon.svg'
import SkillIcon from './SkillIcon'

const SkillCaddy = () => {
  const icons = [
    { name: 'Next.JS', icon: nextIcon },
    { name: 'TypeScript', icon: tsIcon },
    { name: 'React', icon: reactIcon },
    { name: 'PostgreSQL', icon: postgresIcon },
    { name: 'Node.JS', icon: nodeIcon },
    { name: 'Express.JS', icon: expressIcon },
    { name: 'strapi', icon: strapiIcon },
  ]

  return (
    <div className='text-center mt-10'>
      <h3 className=''>Featured Skills</h3>
      <div className='flex justify-between max-w-5xl mx-auto mt-10'>
        {icons.map((icon) => {
          return <SkillIcon key={icon.name} icon={icon.icon} name={icon.name} />
        })}
      </div>
    </div>
  )
}

export default SkillCaddy
