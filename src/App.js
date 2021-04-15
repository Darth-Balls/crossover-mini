import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Message from './components/Message';


function App() {
  return (
    <div className="App">
       <Sidebar />
       <Switch>
        <Route>
          <Route path="/messages/:id" />
        </Route>
      </Switch> 
  
      <div className="Main">
        <Message />
      </div> 
     
    </div>
  );
}

export default App;

