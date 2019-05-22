import React from 'react';
import './styles/navbar.css'
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render(){
        return(
            <div className='Navbar contain'>
                <div className='container-fluid'>
                <Link className='Navbar_brand' to='/'><img className='rounded float-left navLogo' 
                src='https://raw.githubusercontent.com/Tita-Navarro/GDL002-burger-queen/master/burguer-queen-app/src/components/burguer-queen2.png' 
                alt='logoHome' /></Link>
                </div>
            </div>
        );
    }
}

export default Navbar