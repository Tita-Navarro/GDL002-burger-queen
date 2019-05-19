import React from 'react';
import './styles/navoptions.css'
class NavOptions extends React.Component {
    render(){
        return(
            <div className='col-6'>
                <button type="button" className="btn btn-primary btn-mar">Breakfast</button>
                <button type="button" className="btn btn-primary btn-mar">Lunch</button>
            </div>
        );
    }
}

export default NavOptions