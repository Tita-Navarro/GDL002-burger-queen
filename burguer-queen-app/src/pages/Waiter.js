import React from 'react';
import Navbar from '../components/Navbar';
//import NavOptions from '../components/NavOptions';
import Breakfast from '../components/Breakfast';
import Lunch from '../components/Lunch';

class Waiter extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                <div>
                    <ul className='collapsible'>
                    <li>
                        <div className='collapsible-header'>Breakfast</div>
                        <div class="collapsible-body"><span><Breakfast /></span></div>
                    </li>
                    <li>
                        <div class="collapsible-header">Lunch</div>
                        <div class="collapsible-body"><span><Lunch /></span></div>
                    </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Waiter