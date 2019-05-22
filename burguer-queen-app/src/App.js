import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Waiter from "./pages/Waiter";
import Home from "./components/Home";
import Kitchen from "./pages/Kitchen";
import Bmenu from "./components/Bmenu";
import Lmenu from "./components/Lmenu";
import Order from "./components/Order";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Waiter" component={Waiter}/>
        <Route exact path="/Bmenu" render={() => <Bmenu />} />
        <Route exact path="/Lmenu" render={() => <Lmenu />} />
        <Route exact path="/Order" render={()=><Order />}/>
        <Route exact path="/Kitchen" component={Kitchen}/>
        
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
