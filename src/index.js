import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import './view.scss';
import {Sidebar} from './components/sidebar/sidebar.component'
import * as serviceWorker from './serviceWorker';
import { HomeComponent } from './components/home/home.component';
import { ProfilesComponent } from './components/profiles/profiles.component';

const routing = (
    <Router>
        <div className="app-container">
            <div className="sidebar-container">
                <Sidebar/>
            </div>
            <div className="content">
                <Route exact path="/" component={HomeComponent} />
                <Route path="/profiles" component={ProfilesComponent} />
                <Route path="/rooms" component={ProfilesComponent} />
            </div>
        </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
