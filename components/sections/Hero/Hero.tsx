// @refresh reset
import Rive from '@rive-app/react-canvas'
import styles from './Hero.module.scss'

const Hero = () => {
  //   const { rive, RiveComponent } = useRive({
  //     src: 'porthero-anim.riv',
  //     autoplay: true,
  //     stateMachines: 'State Machine 1',
  //   })
  return (
    <section className={styles.hero}>
      <div className={styles.topTitle}>
        <div>
          <p>Hi, my name is</p>
          <h1>Caleb Horton</h1>
        </div>
      </div>
      <div className={styles.riveContainer}>
        <Rive src='porthero-anim.riv' stateMachines={'State Machine 1'} />
      </div>
      <div className={styles.bottomTitle}>
        <div>
          <p>and I&apos;m a</p>
          <h1>Web Developer</h1>
        </div>
      </div>
    </section>
  )
}

export default Hero
