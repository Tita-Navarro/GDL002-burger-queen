import React from "react";

export class Order extends React.Component{
    delItem = (e, i) => {
        this.props.clickDelete(e,i)
    }
    render(){
        const order = this.props.foodOrder.map((food, i) => {
            return(
                <div>
                    <ul key={i} className="list-group col-md-12">
                        <li className="list-group-item d-flex justify-content-between align-items-center col-md-12">
                            {food.item}
                            <span className="btn btn-success">$ {food.price}.00</span>
                            <button className="btn btn-danger col-md-1" onClick={(e) => this.delItem(e, food)}>X</button>
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

export default Order;
