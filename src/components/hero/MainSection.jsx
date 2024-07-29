import { Swiper, SwiperSlide } from 'swiper/react'
import mainImage from '../../assets/hero/cropped-imagepng.png'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Pagination } from 'swiper/modules'
import WatchVideo from './WatchVideo'
import Features from './Features'
import { useTranslation } from 'react-i18next'
import { useRef, useCallback, useState } from 'react'
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";



const MainSection = () => {
  const { t, i18n } = useTranslation()
  const sliderRef = useRef(null);
  const [reachedBeg, setReachedBeg] = useState(true)
  const [reachedEnd, setReachedEnd] = useState(false)
  const handlePrev = () => {
    if (!sliderRef.current) return;
    if (reachedBeg) {
      setReachedBeg(false)
    }
    sliderRef.current.swiper.slideNext();
  }
  
  const handleNext = () => {
    if (!sliderRef.current) return;
    
    if (reachedEnd) {
      setReachedEnd(false)
    }
    sliderRef.current.swiper.slidePrev();
  }


  return (
    <section className='main tracking-[-2%] px-2 py-4 min-h-[492px] mt-[30px]'>
      <div className='flex items-center justify-between gap-10'>
        <div className='first'>
          <h1 className='heading hadari text-[96px] tracking-[-2%] leading-[1.1] font-bold pr-3 relative z-10'>
            {/* رفيقك في عالم <br /> الديجيتال */}
            {t('welcome.0')}
            <br />
            {t('welcome.1')}
          </h1>
        </div>
        <div className='relative'>
        <Swiper
          ref={sliderRef}
          className='min-h-[290px] mt-[35px] max-w-[500px] ml-0'
          modules={[Pagination, Navigation]}
          pagination
          spaceBetween={20}
          onReachBeginning={() => {setReachedBeg(true)}}
          onReachEnd={() => {setReachedEnd(true)}}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <div className='service w-full mx-auto'>
              <div className='main-image justify-center items-center w-full'>
                <img src={mainImage} className=' w-11/12' alt='' />
              </div>
              <p className='font-bold text-center'>{t('heroServices.0')}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='service w-full mx-auto'>
              <div className='main-image justify-center items-center w-full'>
                <img src={mainImage} className=' w-11/12' alt='' />
              </div>
              <p className='font-bold text-center'>
                برامج تسيير وتدبير المقاولات
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='service w-full mx-auto'>
              <div className='main-image justify-center items-center w-full'>
                <img src={mainImage} className=' w-11/12' alt='' />
              </div>
              <p className='font-bold text-center'>
                برامج تسيير وتدبير المقاولات
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='service w-full mx-auto'>
              <div className='main-image justify-center items-center w-full'>
                <img src={mainImage} className=' w-11/12' alt='' />
              </div>
              <p className='font-bold text-center'>
                برامج تسيير وتدبير المقاولات
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
            <button className={"next-arrow cursor-pointer absolute -left-[15px] top-[45%] text-5xl z-30" + (reachedEnd ? ' opacity-50' : '')} onClick={handlePrev}><IoIosArrowDropleftCircle className='text-[#C0BBB9]'/></button>
            <button className={"prev-arrow cursor-pointer absolute -right-[15px] top-[45%] text-5xl z-30" +  (reachedBeg ? ' opacity-60' : '')} onClick={handleNext}><IoIosArrowDroprightCircle  className='text-[#C0BBB9] text-white'/></button>
        </div>
      </div>
      <div className=' mt-10'>
        <WatchVideo />
        <Features />
      </div>
    </section>
  )
}

export default MainSection
