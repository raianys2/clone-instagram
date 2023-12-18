import './style/global.css'
import CenterContent from './components/CenterContent/CenterContent'
import LeftContent from './components/LeftContent/LeftContent'
import RightContent from './components/RightContent/RightContent'
import './components/LeftContent/style.css'


function App() {

  return (
    <main>
      
      <div className='leftContent-Ghost'>
          <LeftContent />
      </div>
      
      <div className='mainContent'>
      <CenterContent />
      <RightContent />
      </div>

    </main>
  )
}

export default App
