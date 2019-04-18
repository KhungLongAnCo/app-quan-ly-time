import React, { Component } from 'react';
import './todoItem.css';

class TodoItem extends Component {

    render(){
        let className = 'TodoItem';
        let {item} = this.props;
        if(item.isComplete){
            className+=' TodoItem-complete';
        }
        return (
            <div className= {className} >
            <p>{item.title}</p>
            </div>
        );
    }

}

export default TodoItem;