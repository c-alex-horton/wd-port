import React from 'react'
import Image from 'next/image'
import style from './Skill.module.scss'

const SkillIcon = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <div className={style.skillIcon}>
      <Image src={icon} alt={name} />
      <h4>{name}</h4>
    </div>
  )
}

export default SkillIcon
