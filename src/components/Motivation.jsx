import MainButton from './Ui/MainButton'

const SocialMediaSharing = () => {
  return (
    <li>
      <div className='first relative'></div>
      <div className='second'></div>
    </li>
  )
}

const Motivation = () => {
  return (
    <ul className='relative flex justify-around flex-wrap'>
      <li className=' bg-white bg-opacity-20 w-[690px] p-5 rounded-[39px]'>
        <h1 className='text-4xl font-bold  tracking-widest'>
          اشترك معنا الآن وارتقي بأحلامك وطموحك عاليا.
        </h1>
        <p className='text-lg'>
          كن رائدا و فاعلا مهما في حاضر ومستقبل جهة سوس ماسة عبر الاستفادة من
          خدماتنا الرقمية والحصرية لأجل إنجاح مشروعك وتعزيز حضورك بالجهة.
        </p>
        <div className='email-section flex'>
          <MainButton> سجل الآن</MainButton>
          <input
            type='email'
            className='w-[348px] text-black focus:outline-none focus:border-none mr-3 px-2'
            placeholder='رقم الهاتف أو البريد الإلكتروني'
          />
        </div>
        <p className='privacy'> نحن نهتم بخصوصية وأمان معلوماتك الشخصية.</p>
      </li>
      <li className=' bg-white bg-opacity-20 w-[390px]  p-5 rounded-[39px]'>
        <h1 className='text-4xl font-bold  tracking-widest'>فريقنا وأهدافنا</h1>
        <p className='text-lg'>
          نحن شباب ومستقبل جهة سوس ماسة نحمل على عاتقنا مسؤولية تحسين وتجويد
          الخدمات الالكترونية وتمكين الشركات الناشئة والكبيرة من تسيير وتنضيم
          انشطتها التجاري...
        </p>
        <MainButton> سجل الآن</MainButton>
        <p className='privacy'> نحن نهتم بخصوصية وأمان معلوماتك الشخصية.</p>
      </li>
      <SocialMediaSharing />
    </ul>
  )
}

export default Motivation
