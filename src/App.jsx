import './App.css'
import MainNavigation from './components/MainNavigation'
import MainSection from './components/hero/MainSection'
// import WatchVideo from './components/hero/WatchVideo'
// import TextBoxes from './components/hero/TextBoxes'
// import Features from './components/hero/Features'
// import Services from './components/services/Services'
import Motivation from './components/Motivation'
import Services from './components/services/Services'
import './i18n'

function App() {
  return (
    <>
      <section className='mohamed'>
        <div className='image-bg bg-main mt-0 pt-4 relative pb-[80px]'>
          <div className='overlay-1 absolute left-0 right-0 top-0 bottom-0'></div>
          <div className='overlay-2 absolute left-0 right-0 top-0 bottom-0'></div>
          <div className='container'>
            <MainNavigation />
            <MainSection />
            <Motivation />
          </div>
        </div>
        <Services />
      </section>
      <section className='mouad'></section>
      <section className='khalid'></section>
    </>
  )
}

export default App
