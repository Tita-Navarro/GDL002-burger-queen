import React from 'react';
import Navbar from '../components/Navbar';
import NavOptions from '../components/NavOptions';

class Waiter extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                <NavOptions />
                
            </div>
        );
    }
}

export default Waiter