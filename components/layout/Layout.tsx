import React from 'react'
import Header from './Header/Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='min-h-screen relative flex flex-col items-center text-calb-pink'>
      <div
        className='fixed w-full h-screen -z-10'
        style={{
          backgroundImage:
            'linear-gradient(to right top, #681766, #511451, #4b104b, #361137, #2d102e, #2c102e, #2c102f, #2b102f, #331239, #3a1444, #421750, #49195c)',
        }}></div>
      <Header />
      {children}
    </main>
  )
}

export default Layout
