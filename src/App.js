import './App.css';
import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import { Element} from "react-scroll";


function App() {
  return (
    <div className="App" id="home">
      <Navbar/>
      <Hero />
      <Element name="about">
        <About/>
      </Element>
      <Element name="project">
        <Project />
      </Element>
    </div>
  );
}

export default App;
