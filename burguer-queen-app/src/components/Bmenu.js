import React from 'react';
import firebase from '../firebase/firebase';
import Order from '../components/Order';
import NavOptions from './NavOptions';
import Navbar from './Navbar';
import Clientform from './Clientform';


class Bmenu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            Breakfast: [],
            Orders: [],
            total:0
        }
        this.addItem = this.addItem.bind(this);
        this.delItem = this.delItem.bind(this);
    }
submit(item, price){
        const order={
            item: item,
            price: price
        }
        this.setState({
            Orders: [...this.state.Orders, order]
        })
        }
        componentDidMount() {
            const FoodBreakfastRef = firebase.database().ref("Breakfast");
            FoodBreakfastRef.on("value", (snapshot) =>{
                let foodB = snapshot.val();
                let newStateBreakfast = [];
                for(let food in foodB){
                newStateBreakfast.push({
                    id: food,
                    image: foodB[food].image,
                    item: foodB[food].item,
                    price: foodB[food].price,

                });
                }
                this.setState({
                    Breakfast: newStateBreakfast
                });
            });
        }   
        delItem(e, menuB){
            e.preventDefault(e)
            this.setState(prevState => ({
                orders: prevState.orders.filter(elem => elem !== menuB)
            }));
        }
    
        addItem () {
            const itemCost = this.state.orders.map((el) => el.price)
            const products = itemCost.reduce((sum, result) => {
                return sum + result;
            });
    
            this.setState({
                total: products
            })
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
                          {this.state.Breakfast.map((menuDetail, i) =>
                          <div className="card mb-4 card" key={i}>
                              <button className="row no-gutters " onClick={()=>{
                                    this.submit(menuDetail.item, menuDetail.price)}}
                                    type="submit">
                                  <div className="col-md-6">
                                      <img src={menuDetail.image} className="card-img " alt=""/>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="card-body  col-md-12">
                                          <span> {this.state.Count}</span>
                                          <h5 className="card-title">{menuDetail.item}</h5>
                                          <p className="card-text">$  {menuDetail.price}.00</p>
                                          
                                      </div>
                                  </div>
                                  </button>
                          </div>
                          )}
                      </div>
                      </div>
                      <div className="col-md">
                            <Clientform />
                            <br/>
                            <Order foodOrder={this.state.Orders} clickDelete = {this.delItem}/>
                            <button className="btn btn-success col-md-6 btn-block" onClick={this.addItem}>Total: $ {this.state.total}.00</button>
                        </div> 
                            </div>
                        </div>
                      
                    </div>
              )
            }   
          }

export default Bmenu