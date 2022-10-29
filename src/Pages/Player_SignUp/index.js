import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Player_reg_form from '../../components/PlayerRegForm'
import ResponsiveNav from '../../components/ResponsiveNav';


function PlayerSignup() {
  return (
    <div>
    <Navbar/>
    <ResponsiveNav/>
    <div className='flex place-items-center bg-player-signup bg-cover z-50 text-6xl clear-both font-extrabold h-80 text-white'>
     <div className='pl-64'>Player Registration</div>
    </div>
    
    <div className=' mx-auto'>
    <Player_reg_form />
    </div>
    
    <Footer/>
    </div>
  )
}

export default PlayerSignup
