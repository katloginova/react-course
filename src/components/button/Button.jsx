import React from 'react';
import './style.css';


class Button extends React.Component{

    render(){
        const {btnName, clickAddTask} = this.props;
  
        return(
        <button className={'btn'} onClick={clickAddTask}>{btnName}</button>
        )
    }
}

export default Button;