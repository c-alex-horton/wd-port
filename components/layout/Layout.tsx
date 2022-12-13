import React from 'react'
import styles from './Layout.module.scss'
import Header from './Header/Header'
import Head from 'next/head'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Caleb Horton - Web Developer</title>
        <meta
          name='description'
          content='Experienced in modern web development practices and design.'
        />
        <meta
          name='keywords'
          content='React, TypeScript, Web, Developer, Frontend, javascript'
        />
      </Head>
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
    </>
  )
}

export default Layout
