import React, { useState } from 'react';
import Header from './Components/header'
import Footer from './Components/footer'
import Login from './Components/login'
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
    <Header  userName = {user}/>
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
