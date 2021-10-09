import React from 'react';
import './style.css';
import Task from './Task';


class List extends React.Component{

    render(){
        const {list} = this.props;
        return(
            <ul className='list-todo'>
                {list?.map((task) => 
                    {return <Task task={task}/>}
                )}
            </ul>
        )
    }
}

export default List;