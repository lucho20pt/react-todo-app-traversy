import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center p-4">
                            <h1>React Todo App</h1>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
