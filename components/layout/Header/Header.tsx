import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>About</li>
        <li>Projects</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Header
