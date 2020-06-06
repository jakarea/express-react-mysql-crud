import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import ShowTask from './components/ShowTask';
import Navbar from './components/Navbar';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddTask} exact />
          <Route path="/:id/edit" component={EditTask}/>
          <Route path="/:id" component={ShowTask}/>
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
