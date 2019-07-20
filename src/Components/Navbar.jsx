import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav style={{
                    top: 0,
                    width: '100%',
                    position: 'fixed',
                    opacity: '0.95',
                    zIndex: 5
                }} className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="navbar-brand">Michael Pu</div>
                </nav >
            </div>
        );
    }
}
