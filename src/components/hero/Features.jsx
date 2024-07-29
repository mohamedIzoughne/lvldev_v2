import { useTranslation } from 'react-i18next'
import { technologyImages } from '../../data'
import MainButton from '../Ui/MainButton'

const Features = () => {
  const { t } = useTranslation()
  return (
    <section className='flex mt-2 mr-auto flex-grow text-white py-3 relative'>
      <div className=' bg-white bg-opacity-[13%] w-[660px]  p-5 rounded-[22px]'>
        {/* <h1 className='text-4xl font-bold  tracking-widest'>
          {t('motivation.0.title')}
        </h1>
        <p className='text-xl my-5 leading-relaxed tracking-wider'>
          {t('motivation.0.desc')}
        </p> */}
        <div className='email-section flex items-center '>
          <MainButton className='text-xl h-[44px] px-2'> سجل الآن
          </MainButton>
          <input
            type='email'
            className='w-[348px] bg-[#9c9c9c] placeholder-white text-white focus:outline-none focus:border-none mr-3 py-2 px-3 text-lg rounded-[12px] flex-grow'
            placeholder={t('motivation.0.inputPlaceholder')}
          />
        </div>
        <p className='privacy'>
          <span>{t('motivation.0.privacyLetter.0')} </span>
          <b>
            <u>
            {t('motivation.0.privacyLetter.1')} 
            </u>
            </b>
        </p>
      </div>
      <ul className='w-1/2 flex justify-around ml-10 mr-12 gap-2'>
        <li className='w-[141px] bg-opacity-20 min-h-[63px] rounded-[12.36px] bg-gradient-to-r from-secondary to-80% to-[#802027] p-2 text-center'>
          <p className='text-[21px]'>{t('features.0.key')}</p>
          <h1 className='font-bold text-4xl'>{t('features.0.value')}</h1>
        </li>
        <li className='w-[201px] min-h-[63px] rounded-main p-2 text-center bg-white bg-opacity-[13%]'>
          <p className='text-[21px]'>{t('features.1.key')}</p>
          <h1 className='font-bold text-4xl font-sans' dir='ltr'>
            {t('features.1.value')}
          </h1>
        </li>
        <li className='w-[201px] min-h-[110px] rounded-main p-2 bg-white text-center bg-opacity-[13%]'>
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
