import React from 'react'
import styles from './Badge.module.scss'

const Badge = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.badge}>{children}</div>
}

export default Badge
