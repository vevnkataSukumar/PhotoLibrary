import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from './containers/home';
import PhotosPage from './containers/photos';

const AppRouter = () => (
    <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/photos" component={PhotosPage} />
    </Router>
);

export default AppRouter;

