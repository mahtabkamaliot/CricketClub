import React from 'react'
import { Link } from 'react-router-dom';

const ResponsiveNav = () => {
    return (
        <div>


            <nav class="bg-white px-2 sm:px-4 py-2.5  fixed lg:hidden w-full z-20 top-0 left-0 border-b border-gray-200 ">
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                    <Link className='' to="/">
                        <img className='h-16 mr-3 '
                            src='/images/logo.png'
                            alt="LOGO"
                        />
                    </Link>
                    <div class="flex md:order-2">
                        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul class="flex flex-col uppercase p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                            <li>

                                <Link className='block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-[#E31B23] md:p-0 ' to='/'>Home</Link>
                            </li>

                            <li>
                                <Link className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E31B23] md:p-0  ' to='/playerlist'>Player List</Link>
                            </li>
                            <li>
                                <Link className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E31B23] md:p-0  ' to='/team'>OUR TEAM</Link>
                            </li>
                            <li>
                                <Link className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E31B23] md:p-0  ' to='/schedule'>SCHEDULE</Link>
                            </li>
                            <li>
                                <Link className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E31B23] md:p-0  ' to='/playersignup'>Player Signup</Link>
                            </li>
                            <li>
                                <Link className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E31B23] md:p-0  ' to='/about'>About Us</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>



        </div>
    )
}

export default ResponsiveNav