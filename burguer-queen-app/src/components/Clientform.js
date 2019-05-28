import React from 'react';

class Clientform extends React.Component{
    constructor(){
        super()

        this.state= {
            name: " "
        }
        this.nameClient = this.nameClient.bind(this);
    }
    writeName(key, value){
        this.setState({
            [key]: value
        })
    }
    nameClient (el){
        el.preventDefault(el);
        this.setState({
            name: this.state.name + el.target.value
        });
    }
    render(){
        return(
            <form>
                <div className='col-md-12 justify-content'>
                <br/>
                <label for="client name">Client</label>
                <input 
                type={"text"} 
                id={"clientName"} 
                value={this.state.name}
                className="form-control form-control-lg col-md-12 background" 
                placeholder="Client's name" 
                onChange={el => this.writeName('name', el.target.value)} 
                required />

                </div>
            </form>
        )
    }
}
export default Clientform;