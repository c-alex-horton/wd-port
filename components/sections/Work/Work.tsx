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
        <ul>
          <li>
            Developed and launched an e-commerce solution using React, Next.Js
            on a Node.js backend using self-hosted Strapi CMS software.
          </li>
          <li>
            Built APIs using RESTful standards to handle sensitive customer and
            order information.
          </li>
          <li>
            Created a custom backend dashboard using GraphQL and React to manage
            and refund orders using standard payment gateways including Stripe,
            Affirm, and Paypal.
          </li>
          <li>
            Configured Dev, Staging, and Production environments for continuous
            workflow.
          </li>
          <li>
            Managed SQL databases and virtual machines in staging and production
            with Microsoft Azure.
          </li>
        </ul>
      </div>
      <div className={styles.job}>
        <h2>Horton Commercial Refrigeration</h2>
        <hr />
        <div className={styles.details}>
          <h3>Web Master</h3>
          <h4>Jun 2016 - Dec 2021</h4>
        </div>
        <ul>
          <li>
            Maintained and updated company website, reworking JavaScript, HTML,
            CSS.
          </li>
          <li>
            Migrated entire site to more efficient server hosting and domain
            configuration saving over 30% in maintenance costs.
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Work
