import React from "react";

export class Order extends React.Component{
    render(){
        const order = this.props.foodOrder.map((food, i) => {
            return(
                <div className='col align-items-right'>
                    <ul key={i} className="list-group col-md-12 align-items-right">
                        <li className="list-group-item d-flex justify-content-between align-items-center col-md-12">
                            {food.item}
                            <span className="btn btn-success">{"$" + " " + food.price}</span>
                        </li>
                    </ul>
                </div>
            )
        })
        return(
            order
        )
    }
}

export default Order