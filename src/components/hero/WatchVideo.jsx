import { IoMdArrowDropright } from 'react-icons/io'
import MainButton from '../Ui/MainButton'
import { useTranslation } from 'react-i18next'
const WatchVideo = () => {
  const { t } = useTranslation()
  return (
    <div className='watch-video px-2 py-5 rounded-main w-1/2 relative'>
      <p className='text-[22px] font-book tracking-wider'>
        {t('siteDescription')}
      </p>
      <div className='buttons flex gap-4 mt-3 w-fit text-[19px]'>
        <button>
          {t('siteDescriptionStartNowButton')}
          <span className='mr-1'>»</span>
          
        </button>
        <MainButton>
          <p>{t('siteDescriptionWatchVideoButton')}</p>
          <IoMdArrowDropright />
        </MainButton>
        {/* <MainButton className='btn-main'>
          <p>{t('siteDescriptionWatchVideoButton')}</p>
          <div className="border"></div>
          <IoMdArrowDropright />
        </MainButton> */}
          
          {/* </div> */}
      </div>
    </div>
  )
}

export default WatchVideo
