import React from 'react';
import data from "./components/data/data";
import Header from './components/navbar/Header';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  const { productsData } = data;
  return (
    <div className="App">
      <Router>

        <Header />

      </Router>


    </div>
  );
}

export default App;
