import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends Component {

    render() {
        // console.log(this.props.todos);
        return (
            <section className="todos | my-4 mx-auto">

                <h3 className="text-center">
                    <strong>My Todos List</strong>
                </h3>

                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        { 
                            this.props.todos.map((todo) => (
                                <TodoItem 
                                    key={todo.id}
                                    todo={todo} 
                                    markComplete={this.props.markComplete}
                                    delTodo={this.props.delTodo}
                                />
                            ))
                        }
                    </div>
                </div>

            </section>
        );
    }
}

// PropTypes
Todos.propTypes = {
    todos : PropTypes.array.isRequired,
    markComplete : PropTypes.func.isRequired,
    delTodo : PropTypes.func.isRequired
}
 
export default Todos