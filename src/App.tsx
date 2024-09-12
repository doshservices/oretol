import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, About, Contact, Insight, Services, Work } from './views';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/work' element={<Work />} />
        <Route path='/insight' element={<Insight />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
