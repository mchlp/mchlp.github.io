import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import About from '../Components/About';
import Intro from '../Components/Intro';

export default class Homepage extends Component {
    render() {
        return <Intro />;
        // return (
        //     <div>
        //         <Navbar />
        //         <Intro />
        //         <About />
        //     </div>
        // );
    }
}
