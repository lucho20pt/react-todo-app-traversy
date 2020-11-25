import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends Component {

    render() {
        // console.log(this.props.todos);
        return (
            <section>

                <div className="row">
                    <div className="col-12 p-4 text-center">
                        <h2>
                            <strong>My Todos List</strong>
                        </h2>
                    </div>
                </div>

                { this.props.todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}

            </section>
        );
    }
}

// PropTypes
Todos.propTypes = {
    todos : PropTypes.array.isRequired
}
 
export default Todos