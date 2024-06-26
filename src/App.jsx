
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Cart from './pages/Cart/Cart'
import PlacedOrder from './pages/PlacedOrder/PlacedOrder'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import { useState } from 'react'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return <>
    {showLogin? <LoginPopup setShowLogin={setShowLogin}/> : null}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlacedOrder/>}/>
      </Routes>
    </div>
    <Footer/>

  </>
}

export default App
