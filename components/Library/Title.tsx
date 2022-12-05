import React from 'react'

export enum titleType {
  section = 'section',
  feature = 'feature',
}

const Title = ({
  children,
  type,
}: {
  children: React.ReactNode
  type: titleType
}) => {
  switch (type) {
    case 'section':
      return (
        <h2 className='text-3xl text-calb-hotpink my-10  drop-shadow-lg'>
          {children}
        </h2>
      )
    case 'feature':
      return <h3 className='text-xl text-calb-hotpink my-10'>{children}</h3>
    default:
      return <h1 className='text-calb-hotpink'>{children}</h1>
  }
}

export default Title
