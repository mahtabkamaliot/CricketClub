import React from 'react';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Player_list from '../../components/Player_list';
import ResponsiveNav from '../../components/ResponsiveNav';


function PlayerList(props) {
    return (
        <div>
            <Navbar />
            <ResponsiveNav/>
            <div className='flex place-items-center bg-player-signup bg-cover z-50 text-6xl font-extrabold h-80 clear-both text-white'>
                <div className='pl-64'>Player List</div>
            </div>

            <div className=' mx-auto'>
                <Player_list/>
            </div>

            <Footer />
        </div>
    );
}

export default PlayerList;