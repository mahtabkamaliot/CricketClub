import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
  
      <nav className="lg:flex  justify-center fixed   hidden items-center  z-10 left-0 right-0   bg-white ">

        <div className="items-center space-x-8 lg:flex">
          <div className='uppercase text-lg'>
            <Link to='/'>Home</Link>
          </div>
          <div className='uppercase text-lg'>
            <Link to='/playerlist'>Player List</Link>
          </div>
          <div className='uppercase text-lg'>
            <Link to='/team'>OUR TEAM</Link>
          </div>
          <div className="flex items-center">

            <Link to="/">
              <img className='h-20'
                src='/images/logo.png'
                alt="LOGO"
              />
            </Link>
          </div>
          <div className='uppercase text-lg'>
            <Link to='/schedule'>SCHEDULE</Link>
          </div>
          <div className='uppercase text-lg'>
            <Link to='/playersignup'>Player Signup</Link>
          </div>
          <div className='uppercase text-lg'>
            <Link to='/about'>About Us</Link>
          </div>

        </div>

      </nav>
      <div className='float-left clear-both h-16 bg-red-500'></div>
    </div>
  )
}

export default Navbar