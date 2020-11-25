import React, { Component } from 'react';

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
                <div className="row">
                    <div className="col-12 text-left">                        
                        <h3> {todo.title}</h3>
                    </div>
                </div>
                ))}

            </section>
        );
    }
}
 
export default Todos;