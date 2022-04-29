
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from './views/homepage/homepage';
import AboutPage from './views/about/about';
import WekitersPage from './views/wekiters/wekiters';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/we-kiters" element={<WekitersPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
