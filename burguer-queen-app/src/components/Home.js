import React from "react";
import "../components/styles/home.css";
import {Link} from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="bg-home">
        <div className="logo-home">
          <img
            src="https://raw.githubusercontent.com/Tita-Navarro/GDL002-burger-queen/master/burguer-queen-app/src/components/burguer-queen2.png"
            alt="logo"
            className="logo-config"
          />
          <h3 className='identity'>Identíficate</h3>
        </div>

        <div>
           <Link to='/Waiter'><img src="https://raw.githubusercontent.com/Tita-Navarro/GDL002-burger-queen/master/burguer-queen-app/src/components/meserowhite.png"
             alt="waiter"
             className="waiterLogo"/></Link> 
             <Link to='/Kitchen'><img src="https://raw.githubusercontent.com/Tita-Navarro/GDL002-burger-queen/master/burguer-queen-app/src/components/chefwhite.png" 
             alt="kitchen"
             className="kitchenLogo"/></Link>
        </div>
      </div>
    );
  }
}
export default Home;
