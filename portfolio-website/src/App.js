import React from 'react';
import GlobalStyle from './globalStyles'
import { Navbar } from "./Components";
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './Pages/HomePage/Home';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar/>
      <Home />
    </Router>
  );
}

export default App;
