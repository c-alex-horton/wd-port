import React from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <Link href={'#about'}>About</Link>
        </li>
        <li>
          <Link href={'#projects'}>Projects</Link>
        </li>
        <li>
          <Link href={'#work'}>Work</Link>
        </li>
        <li>
          <Link href={'#contact'}>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
