import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import About from '../Components/About';
import Intro from '../Components/Intro';
import Projects from '../Components/Projects';

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Intro />
                <About />
                <Projects />
            </div>
        );
    }
}
