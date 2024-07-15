import MainTitle from '../Ui/mainTitle'
import service1 from '../../assets/service-1.png'
// import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io'
import { Swiper, SwiperSlide } from 'swiper/react'
import NextSlideButton from './NextSlideButton'
import PrevSlideButton from './PrevSlideButton'
import servicesBg from '../../assets/services-bg.svg'
import 'swiper/css'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const { t } = useTranslation()
  return (
    <section className='bg-main px-2 py-20 relative pt-[100px]'>
      <div className='w-[1200px] mx-auto relative'>
        <MainTitle className='text-5xl mb-4'>{t('services.title')}</MainTitle>
        <div className='services-field relative items-center p-2'>
          <img
            className='absolute left-0 top-0 w-full h-full'
            src={servicesBg}
            alt=''
          />
          <Swiper spaceBetween={20} slidesPerView={1}>
            <SwiperSlide>
              <div className='service mx-1'>
                <div className='services-image-holder'>
                  <img
                    src={service1}
                    className='w-full h-full object-contain'
                    alt=''
                  />
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
            <div className='controller-next-prev flex justify-between items-center w-[90%] mx-auto p-3 rounded-full font-bold text-2xl relative overflow-hidden'>
              <div className='filter blur-sm w-full h-full absolute left-0 top-0 bg-[#414141] bg-opacity-60'></div>
              <PrevSlideButton className='relative z-10' />
              <p className='relative z-10 text-4xl'>
                {t('services.serviceList.0')}
              </p>
              <NextSlideButton className='relative z-10' />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Services
