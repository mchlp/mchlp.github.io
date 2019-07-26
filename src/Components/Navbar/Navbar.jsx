import React, { Component } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className={'navbar navbar-expand-lg navbar-light ' + styles.nav}>
                    <Link to='/'>
                        <div className="navbar-brand">Michael Pu</div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/projects">Projects</Link>
                            </li>
                        </ul>
                    </div>
                </nav >
            </div>
        );
    }
}
