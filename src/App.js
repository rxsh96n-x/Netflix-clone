import React from 'react';
import NavBar from './components/Navbar/NavBar'
import Banner from './components/Banner/Banner'
import './App.css'
import Rowpost from './components/Rowpost/Rowpost'

function App() {
  return (
    <div className="App">
       <NavBar />
       <Banner />
       <Rowpost />
    </div>
  );
}

export default App;
