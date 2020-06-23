import React, { useState, useEffect } from 'react';
import { Switch, Route} from 'react-router-dom';
import Header from './Components/header';
import Footer from './Components/footer';
import Login from './Components/login';
import Todos from './Components/todos';
import Create from './Components/createToDo';
import './App.css';

function App() {
  const [user, setUser] = useState("Squirrel");
  const [history, setHistory] = JSON.parse(useState(window.localStorage.getItem("history")) || []);

  function setUserName(newUserName) {
    console.log(newUserName)
    setUser(newUserName);
  }

  function addToHistory(newHistory){
    setHistory(newHistory);
  }

  useEffect(() => {
    JSON.stringify(window.localStorage.setItem("history", history))
  }, [history]);

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
        <Create addToHistory={addToHistory} history={history}/>
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
