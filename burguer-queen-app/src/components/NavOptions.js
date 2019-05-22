import React from 'react';
import './styles/navoptions.css';
import {Link} from 'react-router-dom'
class NavOptions extends React.Component {
    render(){
        return(
            <div className='col-6'>
                <Link to='/Bmenu' className='btn btn-primary margin-btn' ><span className='border-option'>Breakfast</span></Link>
                <Link to='/Lmenu' className='btn btn-primary margin-btn' > <span className='border-option'>Lunch</span></Link>

            </div>
        );
    }
}

export default NavOptions