import React from 'react'
import Hero from '../components/sections/Hero/Hero'
import Layout from '../components/layout/Layout'
import About from '../components/sections/About/About'

const page = () => {
  return (
    <Layout>
      {/* <main className='w-full flex justify-center'> */}
      <Hero />
      <About />
      {/* </main> */}
    </Layout>
  )
}

export default page
