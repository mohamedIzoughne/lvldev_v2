import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'
import { useSwiper } from 'swiper/react'

const PrevSlideButton = ({className}) => {
  const swip = useSwiper()

  const prevHandler = () => {
    swip.slidePrev()
  }

  return (
    <button
      onClick={prevHandler}
      className={'prev w-[90px] h-[90px] aspect-square rounded-full border-4 border-solid border-white text-white flex justify-center items-center text-9xl ' + className}
    >
      <IoMdArrowDropright />
    </button>
  )
}

export default PrevSlideButton
