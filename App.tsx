import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Resume } from './pages/Resume';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen bg-vs-bg text-vs-text overflow-x-hidden relative font-sans">
          <Navbar />
          
          <main className="flex-grow z-10 relative pb-16 md:pb-0">
            <AnimatedRoutes />
          </main>
          
          <Footer />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;
