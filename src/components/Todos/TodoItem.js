import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {

    checkStyleCompleted = () => {
        return(
            this.props.todo.completed ? "todo-item-completed" : ""
        );
    }

    render() {

        // destructuring
        const { id, title} = this.props.todo

        return (
            <div className="todo-item | d-flex align-items-center | px-4 py-2">
                
                <input type="checkbox" 
                    onChange={this.props.markComplete.bind( this, id )}
                />

                <p className={`d-block m-2 ${this.checkStyleCompleted() }`}> 
                    {title}
                </p>

                <button className="btn ml-auto"
                    onClick={this.props.delTodo.bind( this, id )}
                >X</button>
                
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo : PropTypes.object.isRequired,
    markComplete : PropTypes.func.isRequired,
    delTodo : PropTypes.func.isRequired
}

export default TodoItem
