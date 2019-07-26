import React, { Component } from 'react';
import About from '../Components/About/About';
import Intro from '../Components/Intro/Intro';
import PageTemplate from './PageTemplate';

export default class Homepage extends Component {
    render() {
        return (
            <PageTemplate>
                <Intro />
                <About />
            </PageTemplate>
        );
    }
}
