import React from 'react'
import styles from './Title.module.scss'

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
      return <h2 className={styles.title}>{children}</h2>
    case 'feature':
      return <h3 className={styles.featureTitle}>{children}</h3>
    default:
      return <h1 className=''>{children}</h1>
  }
}

export default Title
