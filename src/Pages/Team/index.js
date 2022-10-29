import React from 'react';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Team_member from '../../components/TeamMember';
import ResponsiveNav from '../../components/ResponsiveNav';


function Team(props) {
    return (
        <div>
            <Navbar />
            <ResponsiveNav/>
            <div className='flex place-items-center bg-player-signup bg-cover z-50 text-6xl font-extrabold clear-both h-80 text-white'>
                <div className='pl-64'>LIVERPOOL</div>
            </div>

            <div className='w-10/12 mx-auto'>
                <div className='grid grid-cols-3'>
                    <div className='col-span-2'>

                        <div className='py-12' ><img src='/images/Flag/flag-14.png' /></div>
                        <div className='pb-12 font-thin' >
                            <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna mollis euismod. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                        </div>

                        <div className='text-3xl font-bold pb-6'>Coach Paul Smither</div>
                        <div className='grid grid-cols-2 '>
                            <div><img src='/images/Coach/coach.jpg' /></div>
                            <div className='bg-[#f3f3f3] p-8'>
                            <p className='uppercase'>Nationality</p>
                            <div className='flex items-center gap-4 py-3'> <img className='h-3' src='/images/Flag/usa.png'/>
                            <span className='font-semibold'>United States</span>
                            </div>
                            <p className='uppercase py-4'>Current Team</p>
                            <p>arsenal, Barcelona, Juventus, Liverpool, Man.Utd, Napoli, Real Soccer, Sevilla, spurs, Valencia</p>
                            </div>
                        </div>
                        <div className='mt-8'>
                        <Team_member />
                        </div>

                    </div>
                    <div className=''>2</div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Team;