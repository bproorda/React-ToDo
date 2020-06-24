import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import useFetch from './Components/hooks/fetch';
import Header from './Components/header';
import Footer from './Components/footer';
import Login from './Components/login';
import Todos from './Components/todos';
import Create from './Components/createToDo';
import './App.css';

function App() {
  const [user, setUser] = useState("Squirrel");
  const [isLoading, data] = useFetch('https://deltav-todo.azurewebsites.net/api/v1/Todos');
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


  useEffect(() => {
    console.log("Intital history is: " + data);
    setHistory(data);
    window.localStorage.setItem("history", JSON.stringify(data));
  }, [data]);

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
          <Todos history={history} addToHistory={addToHistory} />
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
