import React from 'react';
import { Link } from 'react-router-dom';


function HomeNavbar(props) {

    return (
        <div>
            <nav className="absolute lg:flex flex-wrap justify-center  hidden items-center top-12 z-10 left-0 right-0  lg:mx-20 xl:mx-28  bg-white rounded-[3px]">


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
        </div>
    );
}

export default HomeNavbar;