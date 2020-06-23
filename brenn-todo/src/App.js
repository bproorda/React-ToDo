import React from 'react';
import Header from './Components/header'
import Footer from './Components/footer'
import Login from './Components/login'
import './App.css';

function App() {
  return (
    <>
    <Header/>
    <div id="App">
        <p>
          Brennan's Todo List: Under Construction!
        </p>
        <Login/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
