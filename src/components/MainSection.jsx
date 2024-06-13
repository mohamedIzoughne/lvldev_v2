import mainImage from '../assets/MAnagment.png'

const MainSection = () => {
  return (
    <section className='main bg-main rounded-main  tracking-[-2%] px-2 py-4 mt-2'>
      <p className='heading  text-[50px] tracking-[-2%] leading-[1.1]'>
        رفيقك في عالم الديجيتال
      </p>

      <ul className='services mt-10'>
        <li className='service'>
          <div className='main-image'>
            <img src={mainImage} alt='' />
          </div>
          <p className='font-bold text-center'>برامج تسيير وتدبير المقاولات</p>
        </li>
      </ul>
    </section>
  )
}

export default MainSection
