import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
       <Sidebar />
       <Switch>
        <Route>
          <Route path="/meessages/:id" />
        </Route>
      </Switch> 
  
      <div className="Main"></div> 
     
    </div>
  );
}

export default App;

