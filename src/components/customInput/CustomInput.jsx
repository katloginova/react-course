import React from 'react';
import './style.css';

class CustomInput extends React.Component{
    render(){
        const {type, value, change} = this.props;
        return(
            <input className='input-todo' type={type} value={value} onChange={change}/>
        )
    }
}

export default CustomInput;