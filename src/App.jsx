import './App.css';
import Books from './CompJSX/Books';
import Nav from './CompJSX/Nav';
import Home from './CompJSX/Home';
import About from './CompJSX/About';
import Event from './CompJSX/Event';
import Contact from './CompJSX/Contact';
import Routeer from './CompJSX/Routeer';
import { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const EventRef = useRef();
  const ContactRef = useRef();

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Nav
              onHomeClick={() => scrollToSection(homeRef)}
              onAboutClick={() => scrollToSection(aboutRef)}
              onEventClick={() => scrollToSection(EventRef)}
              onContactClick={() => scrollToSection(ContactRef)}
            />
            <div ref={homeRef}><Home onEventClick={() => scrollToSection(EventRef)}/></div>
            <div ref={aboutRef}><About /></div>
            <div ref={EventRef}><Event /></div>
            <div ref={ContactRef}><Contact /></div>
          </>
        }
      />
      <Route path="/books" element={<Books />} />
      <Route path="/new" element={<Routeer />} />

    </Routes>

  );
}

export default App;
