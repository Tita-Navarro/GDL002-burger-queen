import React from 'react';
import {Breakfast} from './Breakfast.json';

class showBreakfast extends React.Component {
    render(){
        return(
            <div>
                <div className='col-6'>
                    {Breakfast.map((showList, number)=>(
                        <div key={number}> 
                            <div className='card-image'>
                            
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default showBreakfast