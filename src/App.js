import React from 'react';
import './App.css';
import './components/JS/Navbar';
import Navbar from './components/JS/Navbar';
import Frente from './components/JS/Frente.js';
import Footer from './components/JS/Footer.js';


function App() {
  return (
    <div className="App" >
    <Navbar />
    <Frente />
    <Footer />
    </div>
  );
}

export default App;
