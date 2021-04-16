import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';

import Message from './components/Message';
import SearchBar from './components/SearchBar';
// import SidebarOptions from './components/SidebarOptions';


function App() {
  return (
<div className="app">
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
};

export default App;

    