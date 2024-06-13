import MainTitle from '../components/Ui/mainTitle'
import service1 from '../assets/service-1.png'
import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io'

const Services = () => {
  return (
    <section className='bg-main px-2 py-5'>
      <MainTitle>خدماتنا</MainTitle>
      <div className='services-field bg bg-black py-2'>
        <div className='service mx-1'>
          <div className='image-holder'>
            <img src={service1} alt='' />
          </div>
        </div>
        <div className='controller-next-prev flex justify-between w-[310px] mx-auto bg-[#414141] p-1 rounded-full font-bold'>
          <button className='prev w-[26px] aspect-square rounded-full border-2 border-solid border-white text-white flex justify-center items-center text-2xl'>
            <IoMdArrowDropright />
          </button>
          <p>تطوير المواقع الالكترونية</p>
          <button className='prev w-[26px] aspect-square rounded-full border-2 border-solid border-white text-white flex justify-center items-center text-2xl'>
            <IoMdArrowDropleft />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
