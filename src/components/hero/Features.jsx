import { technologyImages } from '../../data'

const Features = () => {
  return (
    <section className='mt-2 text-white py-3 relative'>
      <ul className='w-fit flex gap-2 mx-auto'>
        <li className='w-[201px] bg-opacity-20 min-h-[63px] rounded-[12.36px] p-2 text-center'>
          <p className='text-[21px]'> دعم و توجيه</p>
          <h1 className='font-bold text-4xl'>مجاني</h1>
        </li>
        <li className='w-[201px] min-h-[63px] rounded-main p-2 text-center bg-white  bg-opacity-20'>
          <p className='text-[21px]'>نسخة تجريبية</p>
          <h1 className='font-bold text-4xl'>+1 شهر</h1>
        </li>
        <li className='w-[201px] min-h-[63px] rounded-main p-2 bg-white text-center bg-opacity-20 min-h-[110px]'>
          <p className='text-[21px]'>أحدث التقنيات</p>
          <ul className='flex relative'>
            {/* {technologyImages.map((image) => ( */}
            <li
              className='relative -left-[16px] z-[3]'
              key={technologyImages[2].src}
            >
              {technologyImages[2]}
            </li>
            <li className='relative z-[2]' key={technologyImages[1].src}>
              {technologyImages[1]}
            </li>
            <li
              className='relative -right-[16px] z-[1]'
              key={technologyImages[0].src}
            >
              {technologyImages[0]}
            </li>
            {/* ))} */}
          </ul>
        </li>
      </ul>
    </section>
  )
}

export default Features
