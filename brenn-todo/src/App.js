import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect  } from 'react-router-dom';
import useFetch from './Components/hooks/fetch';
import Header from './Components/header';
import Footer from './Components/footer';
import Login from './Components/login';
import Todos from './Components/todos';
import Create from './Components/createToDo';
import CantCreate from './Components/createToDo/cantCreate'
import Auth from './Components/auth';
import useAuth from './contexts/auth'
import LoadingPic from './sq2.gif'
import './App.css';

function App() {
  const {user} = useAuth();
  const [displayedUser, setUser] = useState(user || "Squirrel");
  const [isLoading, data, refresh] = useFetch('https://deltav-todo-alpha.azurewebsites.net/api/v1/Todos');
  const [history, setHistory] = useState([]);

  function setUserName(newUserName) {
    console.log(newUserName)
    setUser(newUserName);
  }

  function updateStoredTodos(){
        refresh();
        setHistory(data);
        window.localStorage.setItem("history", JSON.stringify(data));
  }


  useEffect(() => {
    console.log("Intital history is: " + data);
    setHistory(data);
    window.localStorage.setItem("history", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    document.title = displayedUser + "'s To Do list";
  }, [displayedUser]);


  if(isLoading) {
    return (
        <>
        <div id="loadingPic">
        <h1>Loading...</h1>
        <img src={LoadingPic}  alt="loadingPic" />
        </div>
        </>
    )
} else {
  return (
    <>
      <Header userName={displayedUser} />
      <Switch>
        
        <Route exact path='/'>
        {!user ? <Login setUserName={setUserName}/> : <Redirect to="/todos"/>}
        </Route>

        <Route path='/todos'>
          <Todos listOfTodos={history} updateStoredTodos={updateStoredTodos}  />
          <Auth permission='create'>
          <Create updateStoredTodos={updateStoredTodos} />
          </Auth>
          <Auth not>
         < CantCreate/>
          </Auth>
        </Route>
        <Route>
          404
        </Route>
      </Switch>
      <Footer />
    </>
  );
}
}

export default App;
