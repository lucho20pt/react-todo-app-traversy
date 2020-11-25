import React, { Component } from 'react'

export class TodoItem extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-12 text-left">                        
                    <h3> {this.props.todo.title}</h3>
                </div>
            </div>
        )
    }
}

export default TodoItem
