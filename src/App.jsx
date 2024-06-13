import './App.css'
import MainNavigation from './components/MainNavigation'
import MainSection from './components/MainSection'
import WatchVideo from './components/WatchVideo'
import TextBoxes from './components/TextBoxes'
import Features from './components/Features'
import Services from './components/Services'

function App() {
  return (
    <>
      <section className='mohamed'>
        <div className='container'>
          <MainNavigation />
          <MainSection />
          <WatchVideo />
          <TextBoxes />
          <Features />
          <Services />
        </div>
      </section>
    </>
  )
}

export default App
