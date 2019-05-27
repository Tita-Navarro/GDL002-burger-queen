import React from 'react';
import firebase from '../firebase/firebase';
import Order from '../components/Order';
import NavOptions from './NavOptions';
import Navbar from './Navbar';


class Lmenu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            Breakfast: [],
            Lunch: [],
            Orders: [],
        }
    }
submit(item, price){
        const order={
            item: item,
            price: price * this.state.Count,
        }
        this.setState({
            Orders: [...this.state.Orders, order]
        })
        }
        componentDidMount() {
            const FoodLunchRef = firebase.database().ref("Lunch");
            FoodLunchRef.on("value", (snapshot) =>{
                let foodB = snapshot.val();
                let newStateLunch = [];
                for(let food in foodB){
                newStateLunch.push({
                    id: food,
                    image: foodB[food].image,
                    item: foodB[food].item,
                    price: foodB[food].price,

                });
                }
                this.setState({
                    Lunch: newStateLunch
                });
            });
        }   
            render(){
              return(
                <div className="justify-content-center">
                <Navbar />
                <NavOptions />
                    <br/>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                <div className="all-card col-md-12 bg-transparent justify-content-center">
                          {this.state.Lunch.map((menuDetail, i) =>
                          <div className="card mb-4 card" key={i}>
                              <button className="row no-gutters " onClick={()=>{
                                    this.submit(menuDetail.item, menuDetail.price, this.handleDecrement)}}
                                    type="submit">
                                  <div className="col-md-6">
                                      <img src={menuDetail.image} className="card-img " alt=""/>
                                  </div>
                                  <div className="col-md-6" onClick={()=> this.handleDecrement}>
                                      <div className="card-body  col-md-12">
                                          <span> {this.state.Count}</span>
                                          <h5 className="card-title">{menuDetail.item}</h5>
                                          <p className="card-text">{"$" + menuDetail.price}</p>
                                          
                                      </div>
                                  </div>
                                  </button>
                          </div>
                          )}
                      </div>
                      </div>
                      <div className="col">
                            <Order foodOrder={this.state.Orders}/>
                        </div> 
                            </div>
                        </div>
                      
                    </div>
              )
            }   
          }

export default Lmenu