import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {

    render() {
        return (
            <div className="todo-item | d-flex align-items-center | px-4 py-2">
                <input type="checkbox"/>
                <h3 className={`m-2 ${ this.props.todo.completed ? "todo-item-completed" : ""}`}> 
                    {this.props.todo.title}
                </h3>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo : PropTypes.object.isRequired
}

export default TodoItem
