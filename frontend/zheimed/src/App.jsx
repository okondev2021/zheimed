import {Routes, Route} from 'react-router-dom';
import { LandingPage } from './pages/Landingpage';
import { DemoScan } from './pages/DemoScan';
import './index.css'

function App() {
  return (
  <>
    <Routes>
      <Route index element={<LandingPage/>}/>
     
    </Routes>
  </>
  )
}

export default App
