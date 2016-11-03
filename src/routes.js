import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './containers/app';
import Home from './components/home/home';
import Login from './components/login/login';
import Menu from './components/menu/menu';
import About from './components/about/about';
import Projects from './components/projects/projectList';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="welcome" component={Menu}/>
        <Route path="projects" component={Projects}/>
        <Route path="about" component={About}/>
    </Route>
)