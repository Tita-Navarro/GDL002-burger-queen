import React from 'react';
import {Lunch} from './Breakfast.json';

class showLunch extends React.Component {
    render(){
        return(
            <div className='card'>
                <div className='col-6'>
                    {Lunch.map((showList, number)=>(
                        <div className='card-body' key={number}> 
                            <div className='card-image'>
                            <img src={showList.image} alt="..." className='card-img-top' />
                            <h5 class="card-title">{showList.name}</h5>
                            <a a href="#" class="btn btn-primary">Add
                </a>
              </div>
              <div class="card-content">
                <p>{showList.price}</p>
              </div>
                            </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default showLunch