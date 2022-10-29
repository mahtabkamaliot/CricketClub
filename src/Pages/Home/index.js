import React from 'react'
import Fixtures_results from '../../components/Fixtures_results'
import Footer from '../../components/Footer'
import Gallary_slider from '../../components/GallarySlider'
import HomeNavbar from '../../components/HomeNavbar'
import News_slider from '../../components/News_slider'
import ResponsiveNav from '../../components/ResponsiveNav';



function Contact() {




  return (

    <div>


      <HomeNavbar />
      <ResponsiveNav/>

      <div className=''>
        <img className='h-[1080px] w-[1920px]' src='/images/Carousel/bg-slider-1.jpg' alt='hero' />
        <div className=' bg-black/2'></div>
        <div className='absolute left-0 right-0 h-screen -bottom-10 xl:-bottom-20 flex flex-col justify-center items-center text-white space-y-3'>
          <p className='text-3xl'>Welcome to the official website of</p>
          <p className='text-8xl pb-3'>BIG SLAM TEAM</p>
          <div className='h-2 bg-[#E31B23] w-32'> </div>
          <p className='text-xl pb-9 pt-3 '>Latest Soccer News -League & Transfer News, Scores & Match Reports</p>
          <div className="">
            <button className='px-8 mr-2 py-4 border border-white bg-white text-black text-xl  rounded-full'>Next Match</button>
            <button className='px-8 ml-2 py-4 border border-[#E31B23] rounded-full bg-[#E31B23] text-xl'>Full Table</button>
          </div>
        </div>
      </div>



      <div className='relative z-20  -mt-28  '>
        <div className='bg-hero-bottom bg-cover w-10/12 mx-auto z-50 rounded-lg'>
          <div className='flex justify-center items-center space-x-5 py-8'>
            <span className='text-white text-4xl '>Real Soccer</span>
            <span>
              <img className='h-20' src='/images/Flag/flag-15.png' alt='flag1' />
            </span>
            <div>
              <p className='text-7xl text-[#E31B23]'>VS</p>
            </div>
            <div>
              <img className='h-20' src='/images/Flag/flag-13.png' alt='flag1' />
            </div>
            <div className='text-white text-4xl'>Vanelcia</div>
          </div>

          <div className='flex justify-center items-center space-x-11'>
            <div className='text-white'>August 13, 2020</div>
            <div className='text-white'>Santiago Bernabéu Stadium</div>
          </div>


          <div className="flex justify-center pt-6 pb-3">
            <button className=' px-6 ml-2 py-3 border border-[#E31B23] rounded-full bg-[#E31B23] text-lg text-white'>GAME INFO</button>
          </div>

        </div>
      </div>
      <News_slider />
      <Fixtures_results />
      <Gallary_slider />



    <Footer />
    </div>


  )
}

export default Contact