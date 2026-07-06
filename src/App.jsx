import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Exp from './Components/Exp/Exp';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Project from './Components/Project/Project';
import Skills from './Components/Skills/Skills';
import Publications from './Components/Publications/Publications';
import Certifications from './Components/Certifications/Certifications';

function App() {
  return (
    <div>
      <Navbar/>
      <main>
        <About/>
        <Exp/>
        <Project/>
        <Publications/>
        <Certifications/>
        <Skills/>
        <Education/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
