import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends Component {

    render() {
        // console.log(this.props.todos);
        return (
            <section className="todos mx-auto">

                <div className="row">
                    <div className="col-12 p-4 text-center">
                        <h2>
                            <strong>My Todos List</strong>
                        </h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        { 
                            this.props.todos.map((todo) => (
                                <TodoItem 
                                    key={todo.id} 
                                    todo={todo} 
                                    markComplete={this.props.markComplete}
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
    todos : PropTypes.array.isRequired
}
 
export default Todos