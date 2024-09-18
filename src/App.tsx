import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CoinPage from './pages/CoinPage';
import NavBar1 from './components/NavBar1'
import NavBar2 from './components/NavBar2'

function App() {
  return (
      <div className="text-white/[.90] bg-[#05010D] flex flex-col min-h-screen w-full">
        <NavBar1 />
        <NavBar2 />
          <Routes>
            <Route path="/" element=<Home/> />
            <Route path="/crypto/:id/:symbol" element=<CoinPage/> />
          </Routes>
      </div>
  )
}

export default App
