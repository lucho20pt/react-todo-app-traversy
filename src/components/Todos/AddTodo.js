import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {

    state = {
        title: ''
    }

    // onChange = (e) => this.setState({title : e.target.value});
    onChange = (e) => this.setState({[e.target.name] : e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''})
    }

    render() {
        return (
            <section className="addTodo | my-4">

                <div className="row">

                    <div className="col-md-6 mx-auto">

                        <h3 className="text-center">
                            <strong>Add Todo</strong>
                        </h3>

                        <form onSubmit={this.onSubmit}>

                            <div className="form-group text-center">

                                <label className="d-none" htmlFor="title">add todo</label>
                                <input className="form-control my-2" 
                                    type="text" 
                                    name="title"
                                    autoComplete="off" 
                                    placeholder={"Add new Todo..."}
                                    value={this.state.title}
                                    onChange={this.onChange}

                                />
                                <button type="submit" className="btn btn-primary">Submit</button>

                            </div>

                        </form>

                    </div>
                </div>
            </section>
        )
    }

}

// PropTypes
AddTodo.propTypes = {
    addTodo : PropTypes.func.isRequired,
}

export default AddTodo
