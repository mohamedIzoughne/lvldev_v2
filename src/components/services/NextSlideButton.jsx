import { IoMdArrowDropleft } from 'react-icons/io'
import { useSwiper } from 'swiper/react'

const NextSlideButton = () => {
  const swip = useSwiper()

  const nextHandler = () => {
    swip.slideNext()
  }

  return (
    <button
      onClick={nextHandler}
      className='prev w-[26px] aspect-square rounded-full border-2 border-solid border-white text-white flex justify-center items-center text-2xl'
    >
      <IoMdArrowDropleft />
    </button>
  )
}

export default NextSlideButton
