import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'
import { useSwiper } from 'swiper/react'

const PrevSlideButton = () => {
  const swip = useSwiper()

  const prevHandler = () => {
    swip.slidePrev()
  }

  return (
    <button
      onClick={prevHandler}
      className='prev w-[26px] aspect-square rounded-full border-2 border-solid border-white text-white flex justify-center items-center text-2xl'
    >
      <IoMdArrowDropright />
    </button>
  )
}

export default PrevSlideButton
