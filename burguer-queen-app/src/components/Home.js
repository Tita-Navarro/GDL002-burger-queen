import React from 'react';
import '../components/styles/home.css';


class Home extends React.Component{
    render(){
        return (
            <div className='bg-home'>
                <div className='logo-home'>
                <img src="../burger-queen2.png" alt='logo' />
                </div>
            </div>
        )
    }
}
export default Home