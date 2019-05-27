import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count: 0
        };
    } 

    handleIncrement(){
        this.setState({
            count: this.state.count + 1
        });
    }
    handleDecrement(){
        this.setState({
            count: this.state.count -1
        });
    }
    
    render(){
        return(
            <div>
                <div> {this.state.count} </div>
                <div>
                <button onClick={() => this.handleIncrement()}>+</button>
                <button onClick={() => this.handleDecrement()}>-</button>
                </div>
            </div>
        )
    }

}
export default Counter;