import React from 'react';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import ResponsiveNav from '../../components/ResponsiveNav';

function About(props) {
    return (
        <div>
            <Navbar />
            <ResponsiveNav/>
            <div className='flex place-items-center bg-player-signup bg-cover z-50 text-6xl font-extrabold h-80 text-white clear-both'>
                <div className='pl-64'>About Us</div>
            </div>

            <div className='w-10/12 mx-auto'>

                <div className='grid grid-cols-2 gap-7  mx-auto mt-12'>
                    <div className=''>
                        <p className='text-2xl font-bold pb-4'>About Big Slam Team</p>
                        <p className=' text-justify'>Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                    </div>
                    <div> <p className='text-2xl font-bold pb-4'>About Services</p>
                        <p className=' text-justify'>Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                            Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Aenean lacinia. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla.</p></div>
                </div>

                <div><p className='uppercase font-bold text-2xl mt-16 text-center'>Meet The Management</p></div>

                <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-5 mt-16'>
                    <div className='bg-[#e6e6e6]'>
                        <img className='' src='/images/Management/Management1.jpg' alt='m1' />
                        <div className='flex flex-col gap-3  justify-center py-7 items-center overflow-hidden'>

                            <a className='font-extrabold' href='#'>LUKE ANDERSON</a>
                            <p className='text-sm'>Chief Executive Officer</p>
                        </div>

                    </div>

                    <div className='bg-[#e6e6e6]'>
                        <img src='/images/Management/Management2.jpg' alt='m1' />
                        <div className='flex flex-col gap-3  justify-center py-7 items-center overflow-hidden'>

                            <a className='font-extrabold' href='#'>ALAN COOPER</a>
                            <p className='text-sm'>Vice President</p>
                        </div>

                    </div>
                    <div className='bg-[#e6e6e6]'>
                        <img src='/images/Management/Management3.jpg' alt='m1' />
                        <div className='flex flex-col gap-3  justify-center py-7 items-center overflow-hidden'>

                            <a className='font-extrabold' href='#'>JOHN SMITHY</a>
                            <p className='text-sm'>Chief Financial Officer</p>
                        </div>

                    </div>

                    <div className='bg-[#e6e6e6]'>
                        <img src='/images/Management/Management4.jpg' alt='m1' />
                        <div className='flex flex-col gap-3  justify-center py-7 items-center overflow-hidden'>

                            <a className='font-extrabold' href='#'>PETER SANDLER</a>
                            <p className='text-sm'>Senior Engineer</p>
                        </div>

                    </div>

                    <div className='bg-[#e6e6e6]'>
                        <img src='/images/Management/Management5.jpg' alt='m1' />
                        <div className='flex flex-col gap-3  justify-center py-7 items-center overflow-hidden'>

                            <a className='font-extrabold' href='#'>RICARDO GOMEZ</a>
                            <p className='text-sm'> HR Manager</p>
                        </div>

                    </div>
                    <div className='bg-[#e6e6e6]'>
                        <img src='/images/Management/Management6.jpg' alt='m1' />
                        <div className='flex flex-col gap-3  justify-center py-7 items-center overflow-hidden'>

                            <a className='font-extrabold' href='#'>JAMES SMITH</a>
                            <p className='text-sm'>Chief Technology Officer</p>
                        </div>

                    </div>


                </div>
            </div>

            <Footer />
        </div>
    );
}

export default About;