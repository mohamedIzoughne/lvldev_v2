import { IoMdArrowDropleft } from 'react-icons/io'
import { useSwiper } from 'swiper/react'

const NextSlideButton = ({ className }) => {
  const swip = useSwiper()

  const nextHandler = () => {
    swip.slideNext()
  }

  return (
    <button
      onClick={nextHandler}
      className={
        'prev w-[90px] h-[90px] aspect-square rounded-full border-4 border-solid border-white text-white flex justify-center items-center text-9xl ' +
        className
      }
    >
      <IoMdArrowDropleft />
    </button>
  )
}

export default NextSlideButton
