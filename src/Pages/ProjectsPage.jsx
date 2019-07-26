import React, { Component } from 'react';
import Projects from '../Components/Projects/Projects';
import PageTemplate from './PageTemplate';

export default class ProjectsPage extends Component {
    render() {
        return (
            <PageTemplate>
                <Projects />
            </PageTemplate>
        );
    }
}
