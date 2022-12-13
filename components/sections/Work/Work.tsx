import React from 'react'
import Title, { titleType } from '../../Library/Title'
import styles from './Work.module.scss'

const Work = () => {
  return (
    <section className={styles.work} id={'work'}>
      <Title type={titleType.section}>Work</Title>
      <div className={styles.job}>
        <h2>J Paul Jones LP</h2>
        <hr />
        <div className={styles.details}>
          <h3>Web Developer</h3>
          <h4>Feb 2022 - Current</h4>
        </div>
      </div>
      <div className={styles.job}>
        <h2>Horton Commercial Refrigeration</h2>
        <hr />
        <div className={styles.details}>
          <h3>Web Master</h3>
          <h4>Jun 2016 - Dec 2021</h4>
        </div>
      </div>
    </section>
  )
}

export default Work
