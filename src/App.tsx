import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Volunteering from './components/Volunteering';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Volunteering />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;