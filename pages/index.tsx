import React from 'react'
import Hero from '../components/sections/Hero/Hero'
import Layout from '../components/layout/Layout'
import About from '../components/sections/About/About'
import Projects from '../components/sections/Projects/Projects'

const page = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
    </Layout>
  )
}

export default page
