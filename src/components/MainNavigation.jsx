import logo from '../assets/logo_smallpng.png'
import icon from '../assets/language_icon.png'
import MainButton from './Ui/MainButton'

const NavItem = ({ children }) => {
  return <li className='px-1 py-1'>{children}</li>
}

const MainNavigation = () => {
  return (
    <nav className='flex mt-4 items-center'>
      <ul className='flex flex-grow bg-main  py-2 px-1 rounded-main text-[15px] justify-around'>
        <li className='logo'>
          <a href=''>
            <img src={logo} alt='' />
          </a>
        </li>
        <NavItem className='services'>
          <a href=''>الخدمات</a>
        </NavItem>
        <NavItem className='main'>
          <a href=''>الرئيسية</a>
        </NavItem>
        <NavItem className='work'>
          <a href=''>أعمالنا</a>
        </NavItem>
        <li>
          <MainButton className='min-w-[68px] h-[31px]'>
            <a href=''>تواصل معنا</a>
          </MainButton>
        </li>
      </ul>
      <button className='language mr-2 bg-main rounded-main w-[36px] h-[35px] flex justify-center items-center'>
        <img className='w-[15px]' src={icon} alt='' />
      </button>
    </nav>
  )
}

export default MainNavigation
