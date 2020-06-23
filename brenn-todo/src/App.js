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

  function setUserName(data) {
    console.log(data)
    setUser(data);
    console.log(user);
  }

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
        <Todos />
        <Create />
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
