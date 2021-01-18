import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header className="p-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>React Todo App</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <nav className="d-flex justify-content-end | mx-2">
                                <Link to="/">Home</Link>
                                <span className="mx-1">|</span>
                                <Link to="/about">About</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
