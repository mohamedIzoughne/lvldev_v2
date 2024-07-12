// import logo from '../assets/logo_smallpng.png'
import icon from '../assets/language_icon.png'
import logoDesk from '../assets/logo-desktop.svg'
import MainButton from './Ui/MainButton'
import LanguageSelect from './Ui/LanguageSelect'
import moroccoImage from '../assets/morocco.svg'

const NavItem = ({ children }) => {
  return (
    <li className='px-1 py-1 font-medium text-2xl px-3 ml-3 last:ml-0'>
      {children}
    </li>
  )
}

const MainNavigation = () => {
  return (
    <nav className='flex items-center relative z-30'>
      <button className='language ml-2 bg-main rounded-main w-[36px] h-[35px] flex justify-center items-center'>
        <img className='w-[15px]' src={icon} alt='' />
      </button>
      <div className='flex flex-grow bg-main justify-between px-3 items-center rounded-main ml-2'>
        <button className='logo flex items-center'>
          <a href='' className=''>
            <img src={logoDesk} alt='' className='max max-h-[26px]' />
          </a>
        </button>
        <ul className='flex py-2 px-1 rounded-main text-[15px] justify-around'>
          <NavItem className='services'>
            <a href=''>الخدمات</a>
          </NavItem>
          <NavItem className='main'>
            <a href=''>الرئيسية</a>
          </NavItem>
          <NavItem className='work'>
            <a href=''>أعمالنا</a>
          </NavItem>
        </ul>
        <MainButton className='min-w-[68px] h-[31px] text-2xl'>
          <a href=''>تواصل معنا</a>
        </MainButton>
      </div>
      <LanguageSelect />
    </nav>
  )
}

export default MainNavigation
