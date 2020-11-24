import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="p-4">React Todo App</h1>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
