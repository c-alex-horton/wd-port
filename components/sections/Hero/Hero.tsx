// @refresh reset
import Rive from '@rive-app/react-canvas'

const Hero = () => {
  //   const { rive, RiveComponent } = useRive({
  //     src: 'porthero-anim.riv',
  //     autoplay: true,
  //     stateMachines: 'State Machine 1',
  //   })
  return (
    <section className='max-w-6xl w-full px-10 '>
      <div className='mt-10'>
        <p>Hi, my name is</p>
        <h1 className='text-5xl font-semibold text-calb-hotpink'>
          Caleb Horton
        </h1>
      </div>
      <div className='w-full h-[30vw] min-h-[300px] mt-[-50px] max-w-[800]'>
        <Rive src='porthero-anim.riv' stateMachines={'State Machine 1'} />
      </div>
      <div className='mt-10 flex justify-end'>
        <div>
          <p>and I&apos;m a</p>
          <h1 className='text-5xl font-semibold text-calb-hotpink'>
            Web Developer
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Hero
