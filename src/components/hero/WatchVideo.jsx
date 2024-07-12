import { IoMdArrowDropright } from 'react-icons/io'
import MainButton from '../Ui/MainButton'

const WatchVideo = () => {
  return (
    <div className='watch-video mt-2 px-2 py-5 rounded-main w-[506px] relative'>
      <p className='text-[22px] font-book tracking-normal'>
        قم بإدارة جميع أعمالك اليوم باستخدام البرامج السحابية الموحدة لدينا
        والمصممة لمساعدتك على كسر الحواجز بين الأقسام وزيادة الكفاءة التنظيمية.
      </p>
      <div className='buttons flex gap-4 mt-3 w-fit text-[19px]'>
        <button>
          ابدأ الآن <span className='mr-1'>»</span>
        </button>
        <MainButton className='h-[40px]'>
          <p>شاهد الفيديو</p>
          <IoMdArrowDropright />
        </MainButton>
      </div>
    </div>
  )
}

export default WatchVideo
