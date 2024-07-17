import { useTranslation } from 'react-i18next'
import { technologyImages } from '../../data'

const Features = () => {
  const { t } = useTranslation()
  return (
    <section className='mt-2 mr-auto flex-grow text-white py-3 relative'>
      <ul className='w-full flex justify-between gap-2 mx-auto'>
        <li className='w-[201px] bg-opacity-20 min-h-[63px] rounded-[12.36px] p-2 text-center'>
          <p className='text-[21px]'>{t('features.0.key')}</p>
          <h1 className='font-bold text-4xl'>{t('features.0.value')}</h1>
        </li>
        <li className='w-[201px] min-h-[63px] rounded-main p-2 text-center bg-white  bg-opacity-20'>
          <p className='text-[21px]'>{t('features.1.key')}</p>
          <h1 className='font-bold text-4xl font-sans' dir='ltr'>
            {t('features.1.value')}
          </h1>
        </li>
        <li className='w-[201px] min-h-[63px] rounded-main p-2 bg-white text-center bg-opacity-20 min-h-[110px]'>
          <p className='text-[21px]'>{t('features.2.key')}</p>
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
