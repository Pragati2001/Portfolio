import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Achievement from './Components/Achievement';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar /> 
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
          <Route 
            path="/about"
            element={<About />}
          />
          <Route 
            path="/projects"
            element={<Projects />}
          />
          <Route 
            path="/achievements"
            element={<Achievement />}
          />
          <Route 
            path="/contact"
            element={<Contact />}
          />
          
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;
