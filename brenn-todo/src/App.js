import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/header';
import Footer from './Components/footer';
import Login from './Components/login';
import Todos from './Components/todos';
import Create from './Components/createToDo';
import './App.css';

function App() {
  const [user, setUser] = useState("Squirrel");
  //const [history, setHistory] = useState(JSON.parse(window.localStorage.getItem("history")) || []);
  const [history, setHistory] = useState([]);

  function setUserName(newUserName) {
    console.log(newUserName)
    setUser(newUserName);
  }

  function addToHistory(newHistory) {
    console.log(newHistory);
     setHistory(newHistory);
     window.localStorage.setItem("history", JSON.stringify(newHistory));
  }
  function getCurrentHistory() {
    let history = window.localStorage.getItem("history");
    let currentHistory = history ? JSON.parse(history) : [];
    console.log("Upon load, history is " + currentHistory);
  }

  // function saveHistoryToLocal(){
  //   JSON.stringify(window.localStorage.setItem("history", history));
  // }

  // useEffect(() => {
  //   const saveHistoryToLocal = () =>{
  //     JSON.stringify(window.localStorage.setItem("history", history));
  //   }
  // }, [history]);

  useEffect(() => {
    //getCurrentHistory();
  }, []);

  useEffect(() => {
    document.title = user + "'s To Do list";
  }, [user]);

  return (
    <>
      <Header userName={user} />
      <Switch>
        <Route exact path='/'>
          <Login setUserName={setUserName} />
        </Route>
        <Route path='/todos'>
          <Todos history={history} />
          <Create addToHistory={addToHistory} history={history} />
        </Route>
        <Route>
          404
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
