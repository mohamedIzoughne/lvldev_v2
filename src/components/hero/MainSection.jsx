import { Swiper, SwiperSlide } from 'swiper/react'
import mainImage from '../../assets/hero/cropped-imagepng.png'

import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import WatchVideo from './WatchVideo'
import Features from './Features'
import { useTranslation } from 'react-i18next'

const MainSection = () => {
  const { t, i18n } = useTranslation()

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
        <Swiper
          className='min-h-[290px] mt-[35px] max-w-[500px] ml-0'
          modules={[Pagination]}
          pagination
          spaceBetween={20}
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
      </div>
      <div className='flex items-start justify-between mt-10'>
        <WatchVideo />
        <Features />
      </div>
    </section>
  )
}

export default MainSection
