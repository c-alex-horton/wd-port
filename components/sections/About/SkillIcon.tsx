import React from 'react'
import Image from 'next/image'

const SkillIcon = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <div className='text-center'>
      <Image src={icon} alt={name} />
      <h4>{name}</h4>
    </div>
  )
}

export default SkillIcon
