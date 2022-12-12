import React from 'react'
import Hero from '../components/sections/Hero/Hero'
import Layout from '../components/layout/Layout'
import About from '../components/sections/About/About'
import Projects from '../components/sections/Projects/Projects'
import Work from '../components/sections/Work/Work'
import Contact from '../components/sections/Contact/Contact'

const page = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Work />
      <Contact />
    </Layout>
  )
}

export default page
