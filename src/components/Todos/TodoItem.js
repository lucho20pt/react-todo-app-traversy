import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

// PropTypes
TodoItem.propTypes = {
    todo : PropTypes.object.isRequired
}

export default TodoItem
