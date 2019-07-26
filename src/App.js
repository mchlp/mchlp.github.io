import React from 'react';
import './bootstrap.min.css';
import './App.css';
import Homepage from './Pages/Homepage';
import { Switch, Route } from 'react-router';
import Page404 from './Pages/Page404';
import ProjectsPage from './Pages/ProjectsPage';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/projects' component={ProjectsPage} />
                <Route component={Page404} />
            </Switch>
        </div>
    );
}

export default App;
