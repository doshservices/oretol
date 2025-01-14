import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Contact, Insight, Services, Work, InsightSinglePage } from "./views";
import { SupportBtn } from "./components/Button";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollPageToTop";
import PageNotFound from "./views/PageNotFound";
import Projects from "./views/projects";

function App() {
  return (
    <BrowserRouter>
      <SupportBtn />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/:id" element={<Services />} />
          <Route path="/project/:id" element={<Projects />} />
          <Route path="/work" element={<Work />} />
          <Route path="/insight" element={<Insight />} />
          <Route path="/insight/:id" element={<InsightSinglePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
