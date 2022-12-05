import React from 'react'
import styles from './Layout.module.scss'
import Header from './Header/Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.main}>
      <div className={styles.bg}></div>
      <div className={styles.backgroundAnimation}>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Header />
      {children}
    </main>
  )
}

export default Layout
