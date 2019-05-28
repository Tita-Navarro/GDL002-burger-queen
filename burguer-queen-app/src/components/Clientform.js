import React from 'react';

class Clientform extends React.Component{
    constructor(){
        super()

        this.state= {
            name: " ",
            waiterName: " "
        }
        this.nameClient = this.nameClient.bind(this);
        this.nameWaiter = this.nameWaiter.bind(this);
    }
    writeName(key, value){
        this.setState({
            [key]: value
        });
    }
    writeWaiter(key2, value2){
        this.setState({
            [key2]: value2
        });
    } 
    nameClient (el){
        el.preventDefault(el);
        this.setState({
            name: this.state.name + el.target.value
        });
    }
    nameWaiter (e){
        e.preventDefault(e);
        this.setState({
            waiterName: this.state.waiterName + e.target.value
        });
    }  
   

    render(){
        return(

            <form>
                <div className='col-md-12 justify-content'>
                <br/>
                <label>Client Name
                <input 
                type={"text"} 
                id={"clientName"} 
                value={this.state.name}
                className="form-control form-control-lg col-md-12 background" 
                placeholder="Client's name" 
                onChange={el => this.writeName('name', el.target.value)} 
                required />
                </label>
                </div>
                <div className='col-md-12 justify-content'>
                <br/>
                <label> Waiter Name
                <input 
                type={"text"} 
                id={"waiterName"} 
                value={this.state.waiterName}
                className="form-control form-control-lg col-md-12 background" 
                placeholder="Waiter" 
                onChange={e => this.writeWaiter('waiterName', e.target.value)} 
                required />
                </label>

                </div>
            </form>
        )
    }
}
export default Clientform;