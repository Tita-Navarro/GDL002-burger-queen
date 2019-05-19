import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Waiter from "./pages/Waiter";
import Home from "./components/Home";
import Kitchen from "./pages/Kitchen";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Home" component={Home}/>
        <Route exact path="/Waiter" component={Waiter}/>
        <Route exact path="/Kitchen" component={Kitchen}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
