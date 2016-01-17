'use strict';

import React     from 'react';
import {Route, Redirect, IndexRoute} from 'react-router';

import App from './containers/App.jsx';

import AppLayout from './containers/AppLayout.jsx';

import UserProfilePage from './containers/pages/UserProfilePage';
import ArticlesPageContainer from './containers/pages/ArticlesPage.jsx';
import ProjectsPageContainer from './containers/pages/ProjectsPage.jsx';
import HomePage from './containers/pages/HomePage';
import AboutPage from './containers/pages/AboutPage';
import LoginPage from './containers/pages/LoginPage.jsx';

export default (
    <Route component={App}>
        <Route component={AppLayout}>
            <Route component={HomePage} path='/'/>
            <Route component={ArticlesPageContainer} path='/tutorials'/>
            <Route component={ProjectsPageContainer} path='/projects'/>
            <Route component={LoginPage} path='/login'/>
            <Route component={UserProfilePage} path='/profile'/>
            <Route component={AboutPage} path='/about'/>
        </Route>
    </Route>
);
