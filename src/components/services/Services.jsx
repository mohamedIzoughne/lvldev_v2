import MainTitle from '../Ui/mainTitle'
import service1 from '../../assets/service-1.png'
// import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io'
import { Swiper, SwiperSlide } from 'swiper/react'
import NextSlideButton from './NextSlideButton'
import PrevSlideButton from './PrevSlideButton'

import 'swiper/css'

const Services = () => {
  return (
    <section className='bg-main px-2 py-5 rounded-main relative mt-10'>
      <MainTitle className='text-5xl'>خدماتنا</MainTitle>
      <div className='services-field'>
        <Swiper spaceBetween={20} slidesPerView={1}>
          <SwiperSlide>
            <div className='service mx-1'>
              <div className='image-holder'>
                <img src={service1} className='w-full' alt='' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='service mx-1'>
              <div className='image-holder'>
                <img src={service1} alt='' />
              </div>
            </div>
          </SwiperSlide>
          <div className='controller-next-prev flex justify-between w-[90%] mx-auto bg-[#414141] p-1 rounded-full font-bold text-2xl'>
            <PrevSlideButton />
            <p>تطوير المواقع الالكترونية</p>
            <NextSlideButton />
          </div>
        </Swiper>
      </div>
    </section>
  )
}

export default Services
