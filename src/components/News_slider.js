import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function News_slider() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4500,
        cssEase: "linear"
      };
  return (
    <div>
    <div className='flex flex-col '>
        <div className=' place-self-center w-10/12 my-24  '>
          <div className='flex justify-center items-center flex-col space-y-5 mb-20'>
          <div className='text-5xl'>Latest News</div>
          <div className='flex justify-center h-[4px] bg-[#E31B23] w-20 '> </div>
          </div>
          
          <Slider {...settings}>
            <div>
              <img className=" rounded-2xl h-[400px] w-full px-2" src="/images/carousel/news/news1.jpg" alt="" />
            </div>
            <div>
              <img className=" rounded-2xl h-[400px] w-full px-2" src="/images/carousel/news/news2.jpg" alt="" />
            </div>
            <div>
              <img className=" rounded-2xl h-[400px] w-full px-2" src="/images/carousel/news/news3.jpg" alt="" />
            </div>
            <div>
              <img className=" rounded-2xl h-[400px] w-full px-2" src="/images/carousel/news/news4.jpg" alt="" />
            </div>
            <div>
              <img className=" rounded-2xl h-[400px] w-full px-2" src="/images/carousel/news/news5.jpg" alt="" />
            </div>
            <div>
              <img className=" rounded-2xl h-[400px] w-full px-2" src="/images/carousel/news/news6.jpg" alt="" />
            </div>
          </Slider>
        </div>
      </div>
    
    </div>
  )
}

export default News_slider