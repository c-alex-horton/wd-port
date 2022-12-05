import React from 'react'

const Header = () => {
  return (
    <nav className='bg-black bg-opacity-40 flex justify-center sticky p-3 w-full top-0 backdrop-blur-md'>
      <ul className='flex justify-around w-1/2'>
        <li>About</li>
        <li>Projects</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Header
