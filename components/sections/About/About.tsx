import React from 'react'
import Image from 'next/image'
import profilePic from '../../../public/caleb-profile.png'
import SkillCaddy from './SkillCaddy'
import Title, { titleType } from '../../Library/Title'
import styles from './About.module.scss'

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <Title type={titleType.section}>About</Title>
        <div className={styles.bio}>
          <div className={styles.profilePic}>
            <Image
              src={profilePic}
              alt='Stylized Picture of Caleb'
              className='mix-blend-screen'
            />
          </div>
          <div className={styles.profile}>
            <p>
              After my first foray into Web Development in 2014, I was
              imediatley hooked. Now eight years later, I can confidently say I
              have found my calling in life. Nothing is more fullfilling to me
              than carrying out a project from the initial conception to
              deployment.
            </p>
            <br />
            <p>
              When I’m not working on projects, I’m pawing through new
              frameworks and packages to try out, and staying current with all
              the modern web development trends.
            </p>
            <br />
            <p>
              <span className='font-bold'>Favorite Tech: </span>
              TypeScript, Next.JS, Prisma
            </p>
            <p>
              <span className='font-bold'>Favorite Podcast: </span>
              Syntax, Magnus Archives
            </p>
            <p>
              <span className='font-bold'>Favorite Food: </span>
              Sushi, Torchy&apos;s Tacos
            </p>
            <p>
              <span className='font-bold'>Currently Learning: </span>
              Playwright Testing
            </p>
          </div>
        </div>
      </div>
      <SkillCaddy />
    </section>
  )
}

export default About
