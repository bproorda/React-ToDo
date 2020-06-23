import React, { useState } from 'react';
import Header from './Components/header'
import Footer from './Components/footer'
import Login from './Components/login'
import './App.css';

function App() {
  const [user, setUser] = useState("");

function setUserName(data) {
  console.log(data)
  setUser(data);
  console.log(user);
}
  return (
    <>
    <Header  userName = {user}/>
    <div id="App">
        <p>
          Brennan's Todo List: Under Construction!
        </p>
        <Login  setUserName = {setUserName}/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
