import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, About, Contact, Insight, Services, Work } from './views';
import { Navbar } from './components/Navbar';
import { SupportBtn } from './components/Button';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollPageToTop';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <SupportBtn />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/work' element={<Work />} />
          <Route path='/insight' element={<Insight />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
