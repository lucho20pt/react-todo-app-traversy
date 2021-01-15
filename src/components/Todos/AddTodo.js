import React, { Component } from 'react'
// import { PropTypes } from "prop-types";

export class AddTodo extends Component {

    render() {
        return (
            <section className="addTodo | my-4">

                <div className="row">

                    <div className="col-md-6 mx-auto">

                        <h2 className="text-center">
                            <strong>Add Todo</strong>
                        </h2>

                        <form>

                            <div className="form-group text-center">

                                <label className="d-none" htmlFor="title">add todo</label>
                                <input className="form-control my-2" 
                                    type="text" 
                                    name="title"
                                    autoComplete="off" 
                                    placeholder="Add new Todo..."
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

// AddTodo.propTypes = {
//     todo : PropTypes.object.isRequired
// }

export default AddTodo
