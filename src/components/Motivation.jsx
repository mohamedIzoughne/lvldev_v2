import MainButton from './Ui/MainButton'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaSquareInstagram } from 'react-icons/fa6'
import { HiArrowUpRight } from 'react-icons/hi2'

const SocialMediaSharing = () => {
  return (
    <li className='text-black text-[27px] w-[237px] h-[300px] rounded-[27px]  flex items-end relative'>
      <div className='arrow absolute z-10 bg-main aspect-square w-14 rounded-full top-1 right-1 flex justify-center items-center'>
        <HiArrowUpRight className='text-white text-4xl' />
      </div>
      <div className='half-1 absolute top-0 left-0 w-full h-[152px] bg-[#E4F0F9] rounded-[27px] rounded-br-none'></div>
      <div className='half-2 absolute bottom-0 right-0 w-[75%] rounded-[27px] h-[150px] bg-[#E4F0F9] rounded-t-none'></div>
      <div className='flex justify-end flex-col h-full relative z-10 pr-2 pb-5'>
        <h2 className='font-bold text-[27px] tracking-wider mb-4'>
          تابعنا عبر وسائل التواصل <br /> الاجتماعي
        </h2>
        <p className='leading-none'>
          استخدم هاشتاغ:
          <br />
          <span className='font-bold'>lvldev#</span>
        </p>
      </div>
      <div className='social-media-platforms bg-secondary text-white h-[140px] px-[6px] py-2 flex flex-col mt-auto justify-around items-center rounded-md text-4xl'>
        <a href=''>
          <FaLinkedin />
        </a>
        <a href=''>
          <FaSquareInstagram />
        </a>
        <a href=''>
          <FaFacebookSquare />
        </a>
      </div>
    </li>
  )
}

const Motivation = () => {
  return (
    <ul className='relative flex justify-around flex-wrap mt-[80px]'>
      <li className=' bg-white bg-opacity-20 w-[690px] p-5 rounded-[39px]'>
        <h1 className='text-4xl font-bold  tracking-widest'>
          اشترك معنا الآن وارتقي بأحلامك وطموحك عاليا.
        </h1>
        <p className='text-xl my-5 leading-relaxed tracking-wider'>
          كن رائدا و فاعلا مهما في حاضر ومستقبل جهة سوس ماسة عبر الاستفادة من
          خدماتنا الرقمية والحصرية لأجل إنجاح مشروعك وتعزيز حضورك بالجهة.
        </p>
        <div className='email-section flex items-center '>
          <MainButton className='text-xl h-[44px] px-2'> سجل الآن</MainButton>
          <input
            type='email'
            className='w-[348px] text-black focus:outline-none focus:border-none mr-3 py-2 px-3 text-lg rounded-[12px] flex-grow'
            placeholder='رقم الهاتف أو البريد الإلكتروني'
          />
        </div>
        <p className='privacy'>
          <span>نحن نهتم بخصوصية وأمان </span>
          <b>معلوماتك الشخصية. </b>
        </p>
      </li>
      <li className=' bg-white bg-opacity-20 w-[390px]  p-5 rounded-[39px]'>
        <h1 className='text-4xl font-bold  tracking-widest'>فريقنا وأهدافنا</h1>
        <p className='my-4 text-xl leading-relaxed tracking-wider'>
          نحن شباب ومستقبل جهة سوس ماسة نحمل على عاتقنا مسؤولية تحسين وتجويد
          الخدمات الالكترونية وتمكين الشركات الناشئة والكبيرة من تسيير وتنضيم
          انشطتها التجاري...
        </p>
        <MainButton className='text-xl h-[44px] px-2'>
          تـــابـــــــع ...
        </MainButton>
      </li>
      <SocialMediaSharing />
    </ul>
  )
}

export default Motivation
