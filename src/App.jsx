import './App.css'
import MainNavigation from './components/MainNavigation'
import MainSection from './components/hero/MainSection'
// import WatchVideo from './components/hero/WatchVideo'
// import TextBoxes from './components/hero/TextBoxes'
// import Features from './components/hero/Features'
// import Services from './components/services/Services'
import Motivation from './components/Motivation'
import Services from './components/services/Services'
function App() {
  return (
    <>
      <section className='mohamed'>
        <div className='image-bg bg-main mt-0 pt-4 bg-[url("../assets/hero/section-2.svg")] relative'>
          <div className='overlay-1 absolute left-0 right-0 top-0 bottom-0'></div>
          <div className='overlay-2 absolute left-0 right-0 top-0 bottom-0'></div>
          <div className='container'>
            <MainNavigation />
            <MainSection />
            <Motivation />
            <Services />
          </div>
        </div>
        {/* 
          <WatchVideo />
          <TextBoxes />
          <Features />
          <Services /> */}
      </section>
      <section className='mouad'></section>
      <section className='khalid'></section>
    </>
  )
}

export default App
