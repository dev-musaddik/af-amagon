import './App.css';
import About from './components/About/About';
import Contract from './components/Contract/Contract';
import Nabvar from './components/Nabvar/Nabvar';
import Shop from './components/Shop/Shop';
import Details from './components/deatils';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<>
            <Nabvar />
            <Shop />
            <About />
            <Contract />
          </>} />
          <Route path="/details/:id" element={<Details />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
