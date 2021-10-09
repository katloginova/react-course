import React from 'react';


class Task extends React.Component{
    render(){
        const {task} = this.props;

        return(
            <li className='list-todo'>{task}</li>
        )
    }
}

export default Task;